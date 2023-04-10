    const qs = (el)=>document.querySelector(el);
    const sidebar = qs('.sidebar-wrapper');
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

    var timeout;
    buttons=document.querySelectorAll('.ripple');
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
