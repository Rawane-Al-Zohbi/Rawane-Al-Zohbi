
var services = document.getElementById('Services');

var Orig_content=`<div>
<h4 class="title" style="font-family: cursive; "><a href="">svc</a></h4>
<br>
<p class="description" style="font-family: cursive; ">OK</p>
</div>`

fetch('https://shrouded-lowlands-59927.herokuapp.com/services')
  .then(response => response.json())
  .then(json => {
    json.services.forEach(element => {
        debugger;
     var content = Orig_content;
     content = content.replace('svc',element.A);
     console.log(content)
     content = content.replace('OK',element.B);
     console.log(content)
        
     var service = document.createElement('div')
     service.innerHTML = content;
     service.className = 'col-lg-4 col-md-6 icon-box';
     services.appendChild(service)
        
    });
  })

  var about=document.getElementById('rawane');

var original=` <div class="col-sm-3 col-xs-6">
<div class="feature-about">
    <div class="medium-rectangle rectangle">
        <i class="fa fa-laptop" aria-hidden="true"></i>
    </div><!-- /.rectangle -->
    <h3>title</h3>
    <p>explication</p>
</div><!-- /.feature-about -->
</div>                    `

/*<div class="col-sm-3 col-xs-6">
                        <div class="feature-about">
                            <div class="medium-rectangle rectangle">
                                <i class="fa fa-code" aria-hidden="true"></i>
                            </div><!-- /.rectangle -->
                            <h3>Web development</h3>
                            <p>The web development process involves taking the graphical elements defined in the design process and coding them into a custom theme.</p>
                        </div><!-- /.feature-about -->
                    </div>                    
                    <div class="col-sm-3 col-xs-6">
                        <div class="feature-about">
                            <div class="medium-rectangle rectangle">
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </div><!-- /.rectangle -->
                            <h3>SEO OPTIMIZATION</h3>
                            <p>Go farther than you thought you could. With us you can go farther then ever before. Be in top results of searches.</p>
                        </div><!-- /.feature-about -->
                    </div>                    
                    <div class="col-sm-3 col-xs-6">
                        <div class="feature-about">
                            <div class="medium-rectangle rectangle">
                                <i class="fa fa-twitter" aria-hidden="true"></i>
                            </div><!-- /.rectangle -->
                            <h3>SOCIAL MEDIA</h3>
                            <p>It's important to keep your brand consistent and recognizable across all platforms</p>
                        </div><!-- /.feature-about -->
                    </div>
                </div>
             </div>*/

 fetch('https://shrouded-lowlands-59927.herokuapp.com/services')
  .then(response => response.json())
  .then(json => {
    json.services.forEach(element => {
     var content = original;
    content = content.replace('title',element.C);
     content = content.replace('explication',element.D);
        
     var abt = document.createElement('div')
     abt.innerHTML = content;
    // abt.className = 'col-lg-4 col-md-6 icon-box';
     about.appendChild(abt )
        
    });
  })