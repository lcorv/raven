"use-strict";
//import stylesheet
let stylesheet = document.createElement('link');
stylesheet.rel = "stylesheet";
stylesheet.href = "https://lcorv.github.io/raven/css/raven.css";
document.body.appendChild(stylesheet);
//shortcuts
const qs = (el) => document.querySelector(el);
const qsa = (els) => document.querySelectorAll(els);
//sidebar
export const sidebar = {}
sidebar.open = () => {
    sidebar.sidebarWrapper.open = true;
    sidebar.sidebarWrapper.classList.add('sidebar-opened');
    sidebar.sidebarCloser.style.display = 'block';
}
sidebar.close = () => {
    sidebar.sidebarWrapper.open = false;
    sidebar.sidebarWrapper.classList.remove('sidebar-opened');
    sidebar.sidebarCloser.style.display = 'none';
}
sidebar.initiate = () => {
    sidebar.sidebarWrapper = qs('.sidebar-wrapper');
    if (sidebar.sidebarWrapper) {
        sidebar.sidebarWrapper.open = false;
        sidebar.sidebarOpener = qs('#sidebarOpener');
        sidebar.sidebarCloser = qs('#sidebarCloser');

        sidebar.sidebarOpener.addEventListener('click', () => {
            if (sidebar.sidebarWrapper.open == false) {
                sidebar.open();
            }
            else {
                sidebar.close();
            }
        })
        sidebar.sidebarCloser.addEventListener('click', sidebar.close);
    }
}
sidebar.initiate();


//ripples
export const ripple = {};
ripple.initiate = () => {
    var timeout;
    let buttons = document.querySelectorAll('.ripple');
    if (buttons.length > 0) {
        buttons.forEach(button => {
            button.addEventListener("pointerdown", (e) => {
                buttons.forEach(button =>
                    button.classList.remove("ripple-active")
                )
                window.clearTimeout(timeout)
                document.documentElement.style.setProperty(
                    '--animation', "none")
                document.documentElement.style.setProperty(
                    '--animation2', "none")
                button.classList.add("ripple-active")
                let pointerX = e.offsetX
                let pointerY = e.offsetY
                let width = button.clientWidth;
                let height = button.clientHeight;
                let left;
                let top;
                left = pointerX - (width / 2)
                top = pointerY - (height / 2)
                document.documentElement.style
                    .setProperty('--left', `${left}px`);
                document.documentElement.style
                    .setProperty('--top', `${top}px`);
                if (height > width) {
                    document.documentElement.style
                        .setProperty('--width', `${height}px`);
                }
                else {
                    document.documentElement.style
                        .setProperty('--width', `${width}px`);
                }
                document.documentElement.style.setProperty(
                    '--animation', "click .6s ease-out"
                )
                document.documentElement.style.setProperty(
                    '--animation2', "click .6s 0.2s ease-out")
                timeout = window.setTimeout(() => {
                    document.documentElement.style.setProperty(
                        '--animation2', "none")
                    document.documentElement.style.setProperty(
                        '--animation', "none")
                }, 800)
            })
        })
    }
}
ripple.initiate();

//expand

export const expand = {};

expand.initiate = ()=>{
    expand.expandTitle = qsa('.expand-title');
    if (expand.expandTitle.length != 0) {
        for (let i = 0; i < expand.expandTitle.length; i++) {
            let expandBtn = qsa('.expand')[i];
            let expandContent = qsa('.expand-content')[i];
            let expandContentWrapper = qsa('.expand-content-wrapper')[i];
            expandContentWrapper.expanded = false;
            expand.expandTitle[i].addEventListener('click', expandElement);
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
        }
    }
}
expand.initiate()
