<template>
  <span>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <b>Anonymous Feedback</b>
            </div>
            <div class="modal-body">
              <textarea v-model="message" class="feedback-input" />
            </div>
            <div class="modal-footer">
              <button class="pure-material-button-contained" @click="$emit('close')">Close</button>
              <button
                v-bind:disabled="message === ''"
                class="pure-material-button-contained"
                @click="submitMsg"
              >SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </span>
</template>
<script>
export default {
  data: function() {
    return { showModal: false, message: "" };
  },
  methods: {
    submitMsg: async function() {
      try {
        const res = await this.sendRequest(this.message);
        if (res.status == 200) {
          this.$emit("close");
          alert("Sent successfully");
        } else {
          alert("Please try again");
        }
      } catch (e) {
        console.log(e);
        alert("Please try again");
      }
      console.log(this.message);
    },
    sendRequest: function(data) {
      return fetch(
        "https://us-central1-socialmediaapp-d1306.cloudfunctions.net/api/data",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            body: data
          })
        }
      );
    }
  }
};
</script>
<style scoped>
.pure-material-button-contained {
  float: right;
  margin-right: 10px;
  position: relative;
  box-sizing: border-box;
  border: none;
  border-radius: 4px;
  padding: 0 16px;
  min-width: 64px;
  height: 36px;
  vertical-align: middle;
  text-align: center;
  text-overflow: ellipsis;
  text-transform: uppercase;
  color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));
  background-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  font-family: var(
    --pure-material-font,
    "Roboto",
    "Segoe UI",
    BlinkMacSystemFont,
    system-ui,
    -apple-system
  );
  font-size: 14px;
  font-weight: 500;
  line-height: 36px;
  overflow: hidden;
  outline: none;
  cursor: pointer;
  transition: box-shadow 0.2s;
}
.pure-material-button-contained::-moz-focus-inner {
  border: none;
}
.pure-material-button-contained::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));
  opacity: 0;
  transition: opacity 0.2s;
}
.pure-material-button-contained::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 50%;
  padding: 50%;
  width: 32px; /* Safari */
  height: 32px; /* Safari */
  background-color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));
  opacity: 0;
  transform: translate(-50%, -50%) scale(1);
  transition: opacity 1s, transform 0.5s;
}
.pure-material-button-contained:hover,
.pure-material-button-contained:focus {
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
}
.pure-material-button-contained:hover::before {
  opacity: 0.08;
}
.pure-material-button-contained:focus::before {
  opacity: 0.24;
}
.pure-material-button-contained:hover:focus::before {
  opacity: 0.3;
}
.pure-material-button-contained:active {
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
}
.pure-material-button-contained:active::after {
  opacity: 0.32;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0s;
}
.pure-material-button-contained:disabled {
  color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
  background-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.12);
  box-shadow: none;
  cursor: initial;
}
.pure-material-button-contained:disabled::before {
  opacity: 0;
}
.pure-material-button-contained:disabled::after {
  opacity: 0;
}
.modal-footer {
  height: 25px;
}
.feedback-input {
  width: 70vw;
  height: 20vh;
  resize: none;
}
input:focus,
textarea:focus,
select:focus {
  outline: none;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 1.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 70vw;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 1.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
  margin-right: 10px;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.5);
}
</style>