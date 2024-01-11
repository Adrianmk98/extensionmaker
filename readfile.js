function readSingleFile(evt) {
            var f = evt.target.files[0];
            if (f) {
                var r = new FileReader();
                r.onload = function(e) {
                    var contents = e.target.result;
                    var ct = r.result;
                    var dd= ct.replaceAll("\"", "");
                    var words = dd.split(/[,\n]+/);
                    //document.write('<table>');
                    //document.write('<tr>');
                    var table = document.createElement('table');
                    table.style.border = "1px solid black";
                    for(var l=0; l<words.length; l++)
                    {
                        var tr = document.createElement('tr');

                        var td1 = document.createElement('td');
                        var td2 = document.createElement('td');
                        var td3 = document.createElement('td');
                        var td4 = document.createElement('td');
                        tr.style.border = "1px solid black";
                        td1.style.border = "1px solid black";
                        td2.style.border = "1px solid black";
                        td3.style.border = "1px solid black";
                        td4.style.border = "1px solid black";

                        if(l % 5 === 0)
                        {
                            //document.write('</tr>');
                           // document.write('<tr>');
                            var text1 = document.createTextNode(words[l+1]);
                            var text2 = document.createTextNode(words[l]);
                            var text3 = document.createTextNode(words[l+2]);
                            var text4 = document.createTextNode(words[l+4]);

                            td1.appendChild(text1);
                            td2.appendChild(text2);
                            td3.appendChild(text3);
                            td4.appendChild(text4);

                            tr.appendChild(td1);
                            tr.appendChild(td2);
                            tr.appendChild(td3);
                            tr.appendChild(td4);

                            table.appendChild(tr);
                        }
                        //document.write('<td>');
                        //document.write(words[l]);
                        //document.write('</td>');




                    }
                    document.body.appendChild(table);
                }
                r.readAsText(f);
            } else {
                alert("Failed to load file");
            }
        }

        document.getElementById('fileinput').addEventListener('change', readSingleFile, false);
