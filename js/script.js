let btns=document.querySelectorAll(".btn");
let example=document.querySelector("#example");
for (let btn of btns)
{
    btn.addEventListener("click",(event)=>{
        if(btn.getAttribute("data-name")=="button")
        {
            example.innerHTML=`<p>Как выглядит тег который вы выбрали</p>
                                <p><input type="submit" name="Submit" value="Кнопка"></p>
                                <p>И вот его код</p>
                                <p>
                                <code>
                                &#60;input type="submit" name="Submit" value="Кнопка"&#62;
                                </code>
                                </p>`;
        }
        if(btn.getAttribute("data-name")=="checkbox")
        
        {
            example.innerHTML=`<p>Как выглядит тег который вы выбрали</p>  
                                    <P><td>
                                        <input type="checkbox" name="checkbox" value="checkbox">
                                            Пиво
                                        <input type="checkbox" name="checkbox2" value="checkbox">
                                            Чай
                                        <input type="checkbox" name="checkbox3" value="checkbox">
                                            Кофе
                                    </td></p>
                                    <p>И вот его код</p>
                                    <code>
                                &#60;input type="checkbox" name="checkbox" value="checkbox"&#62;<br>
                                Пиво<br>
                                &#60;input type="checkbox" name="checkbox" value="checkbox"&#62;<br>
                                Чай<br>
                                &#60;input type="checkbox" name="checkbox" value="checkbox"&#62;<br>
                                Кофе<br>
                                </code>
                                </p>`;
        }
        if(btn.getAttribute("data-name")=="file")
        {
            example.innerHTML=`<p>Как выглядит тег который вы выбрали</p>
                                <p><input type="file" name="file"></p>
                                <p>И вот его код</p>
                                <p>
                                <code>
                                &#60;input type="file" name="file"&#62;
                                </code>
                                </p>`;
        }
        if(btn.getAttribute("data-name")=="image")
        {
            example.innerHTML=`<p>Как выглядит тег который вы выбрали</p>
                                <p><img src="img/1f32de75ae0a1ac218a902f6f361a6d7.jpg" alt=""></p>
                                <p>И вот его код</p>
                                <p>
                                <code>
                                &#60;img src="img/1f32de75ae0a1ac218a902f6f361a6d7.jpg(путь до файла)" alt="название, если картинка не прогрузилась";
                                </code>
                                </p>`;
        }
        if(btn.getAttribute("data-name")=="password")
        {
            example.innerHTML=`<p>Как выглядит тег который вы выбрали</p>
                                <p><input type="password" name="textfield"></p>
                                <p>И вот его код</p>
                                <p>
                                <code>
                                &#60;input type="password" name="textfield"&#62;
                                </code>
                                </p>`;
        }
        if(btn.getAttribute("data-name")=="radio")
        {
            example.innerHTML=`<p>Как выглядит тег который вы выбрали</p>
                                <p><td align="left"><input type="radio" name="radiobutton" value="radiobutton">
                                Пиво
                                <input type="radio" name="radiobutton" value="radiobutton">
                                Чай
                                <input type="radio" name="radiobutton" value="radiobutton">
                              Кофе</td></p>
                                <p>И вот его код</p>
                                <p>
                                <code>
                                &#60;input type="radiobutton" name="radiobutton" value="radiobutton"&#62;<br>
                                Пиво<br>
                                &#60;input type="radiobutton" name="radiobutton" value="radiobutton"&#62;<br>
                                Чай<br>
                                &#60;input type="radiobutton" name="radiobutton" value="radiobutton"&#62;<br>
                                Кофе<br>
                                </code>
                                </p>`;
        }
        if(btn.getAttribute("data-name")=="reset")
        {
            example.innerHTML=`<p>Как выглядит тег который вы выбрали</p>
                                <p><input name="Submit2" type="reset"></p>
                                <p>И вот его код</p>
                                <p>
                                <code>
                                &#60;input name="Submit2" type="reset"&#62;
                                </code>
                                </p>`;
        }
        if(btn.getAttribute("data-name")=="submit")
        {
            example.innerHTML=`<p>Как выглядит тег который вы выбрали</p>
                                <p><input type="submit" name="Submit22"></p>
                                <p>И вот его код</p>
                                <p>
                                <code>
                                &#60;input type="submit" name="Submit22"&#62;
                                </code>
                                </p>`;
        }
        if(btn.getAttribute("data-name")=="text")
        {
            example.innerHTML=`<p>Как выглядит тег который вы выбрали</p>
                                <p><input type="text" name="textfield2"></p>
                                <p>И вот его код</p>
                                <p>
                                <code>
                                &#60;input type="text" name="textfield2"&#62;
                                </code>
                                </p>`;
        }
    });
}
