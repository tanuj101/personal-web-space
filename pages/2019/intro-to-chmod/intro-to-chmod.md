<style>
td,th{
    display:table-cell;
}
th,td{
    border: 1px solid #a2a9b1;
    padding: 0.2em 0.4em;
}
tr{
    display:table-row;
    vertical-align: inherit;
    border-color: inherit;
}
.wikitable {
    background-color: #f8f9fa;
    color: #222;
    margin: 1em 0;
    border: 1px solid #a2a9b1;
    border-collapse: collapse;
    border-spacing:2px;
    margin:10px
}
.table-container{
    display:flex;
    justify-content:center;
}
</style>
<h1 class="blog-heading"> Introduction to chmod</h1>

<p>Before the actual understanding I never really tried how chmod works but I've used it nevertheless for various purposes like running a shell script , changing permissions of an <a target="_blank" href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html"> aws ssh key</a> etc.</p>
<p>I didn't even care about the logic I just execute this good ol' command on one of my shell script <b>chmod +x abc.sh</b>. I came to know about chmod during one of the lectures on Operating Systems in College which was pretty usefull in a way if anyone would ask what am I doing with chmod while demonstrating something then I'd be able to answer properly</p>
<p>Usually the chmod command is like this</p>

```sh
chmod XXX FILENAME
```

<p>This XXX takes upto three octal digits(0-7) for example 777 ,these digits define permisions for <b>file owner</b>,<b>Group</b> and <b>Others(public)</b> respectively.</p>

<p>Suppose we have to grant Read write permission(not execute) to the user and none for the others then the corresponding command would be</p>

```sh
chmod 600 FILENAME
```


<table align="right" class="wikitable">
   <tbody>
      <tr>
         <th>#</th>
         <th>Permission</th>
         <th>rwx</th>
         <th>Binary</th>
      </tr>
      <tr>
         <td>7</td>
         <td>read, write and execute</td>
         <td>rwx</td>
         <td>111</td>
      </tr>
      <tr>
         <td>6</td>
         <td>read and write</td>
         <td>rw-</td>
         <td>110</td>
      </tr>
      <tr>
         <td>5</td>
         <td>read and execute</td>
         <td>r-x</td>
         <td>101</td>
      </tr>
      <tr>
         <td>4</td>
         <td>read only</td>
         <td>r--</td>
         <td>100</td>
      </tr>
      <tr>
         <td>3</td>
         <td>write and execute</td>
         <td>-wx</td>
         <td>011</td>
      </tr>
      <tr>
         <td>2</td>
         <td>write only</td>
         <td>-w-</td>
         <td>010</td>
      </tr>
      <tr>
         <td>1</td>
         <td>execute only</td>
         <td>--x</td>
         <td>001</td>
      </tr>
      <tr>
         <td>0</td>
         <td>none</td>
         <td>---</td>
         <td>000</td>
      </tr>
   </tbody>
</table>

Note that the first digit 6 from 600 comes from combination of three binary bits which is corresponding to <b>rw-</b>.
 6 corresponds to 110 in binary also.If we want to give the user execute permissions this bits would've been 111 which is 7 in octal. In the same way this also works.
 

```sh
chmod a+rw FILENAME
```

**a** will mean for all classes (File Owner,Group and others)
To remove the permission you can do


`chmod a-rw FILENAME`

<p style="border-bottom:1px solid #eee;padding-bottom:40px">Then there is this <b>-R</b> Flag it comes into action when you are changing mode of a directory and want to apply same permission to every file/directory reciding inside a directory<br><br>
<code>chmod -R 700 /path/to/directory</code>
</p>

Want to learn more? <a href="https://docstore.mik.ua/orelly/unix3/upt/ch50_05.htm">Using chmod to Change File Permission</a>
