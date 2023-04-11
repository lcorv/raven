    "use-strict";
    //import stylesheet
    let stylesheet = document.createElement('link');
    stylesheet.rel = "stylesheet";
    stylesheet.href = "https://lcorv.github.io/raven/css/raven.css";
    document.body.appendChild(stylesheet);
    //shortcuts
    const qs = (el)=>document.querySelector(el);
    const qsa = (els)=>document.querySelectorAll(els);
    //sidebar
    const sidebar = qs('.sidebar-wrapper');
    if( sidebar ){
        sidebar.open = false ;
        const sidebarOpener = qs('#sidebarOpener');
        const sidebarCloser = qs('#sidebarCloser')
        function openSidebar(){
            sidebar.open = true;
            sidebar.classList.add('sidebar-opened');
            sidebarCloser.style.display='block';
        }
        function closeSidebar(){
            sidebar.open = false;
            sidebar.classList.remove('sidebar-opened');
            sidebarCloser.style.display = 'none';
        }
        sidebarOpener.addEventListener('click',()=>{
            if(sidebar.open == false){
                openSidebar();
            }   
            else{
                closeSidebar();
            }
        })
        sidebarCloser.addEventListener('click',closeSidebar);
    }
    //ripples
    var timeout;
    let buttons = document.querySelectorAll('.ripple');
    if( buttons.length > 0 ){
        buttons.forEach(button =>{
            button.addEventListener("pointerdown",(e)=>{
            buttons.forEach(button=>
            button.classList.remove("ripple-active")
            )
            window.clearTimeout(timeout)
          document.documentElement.style.setProperty(
            '--animation', "none")
          document.documentElement.style.setProperty(
            '--animation2', "none")
            button.classList.add("ripple-active")
            let pointerX=e.offsetX
            let pointerY=e.offsetY
            let width=button.clientWidth;
            let height=button.clientHeight;
            let left;
            let top;
            left = pointerX-(width/2)
            top = pointerY-(height/2)
        document.documentElement.style
        .setProperty('--left', `${left}px`);
        document.documentElement.style
        .setProperty('--top', `${top}px`);
        if(height>width){
        document.documentElement.style
        .setProperty('--width', `${height}px`);
        }
        else{
        document.documentElement.style
        .setProperty('--width', `${width}px`);
        }
        document.documentElement.style.setProperty(
            '--animation', "click .6s ease-out"
        )
        document.documentElement.style.setProperty(
            '--animation2', "click .6s 0.2s ease-out")
        timeout = window.setTimeout(()=>{
            document.documentElement.style.setProperty(
            '--animation2', "none")
            document.documentElement.style.setProperty(
            '--animation', "none")
        },800)
            })
            })
    }
    //expand
    const expandTitle = qsa('.expand-title');
    if (expandTitle.length != 0) {
        for (let i = 0; i < expandTitle.length; i++) {
            const expandBtn = qsa('.expand')[i];
            const expandContent = qsa('.expand-content')[i];
            const expandContentWrapper = qsa('.expand-content-wrapper')[i];
            expandContentWrapper.expanded = false;
            function expandElement() {
                if (expandContentWrapper.expanded == false) {
                    let height = expandContent.clientHeight;
                    document.documentElement.style.setProperty('--expand-height', `${height}px`)
                    expandContentWrapper.expanded = true;
                    expandBtn.style.transform = 'rotateZ(-180deg)';
                    expandContentWrapper.style.height = `${height}px`;
                }
                else {
                    expandContentWrapper.expanded = false;
                    expandBtn.style.transform = 'rotateZ(0deg)';
                    expandContentWrapper.style.height = '0px';
                }
            }
            expandTitle[i].addEventListener('click', expandElement);
        }
    }
