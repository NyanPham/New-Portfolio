import Scrollbar, { ScrollbarPlugin } from "smooth-scrollbar";
export const options = {
    damping: 0.1,
    alwaysShowTracks: true,
    plugins: {
        disableScroll: {
            direction: "x",
        },
    },
};
class DisableScrollPlugin extends ScrollbarPlugin {
    static pluginName = "disableScroll";

    static defaultOptions = {
        direction: "",
    };

    transformDelta(delta) {
        if (this.options.direction) {
            delta[this.options.direction] = 0;
        }

        return { ...delta };
    }
}

class AnchorPlugin extends ScrollbarPlugin {
    static pluginName = "anchor";

    onHashChange = () => {
        this.jumpToHash(window.location.hash);
    };

    onClick = (event) => {
        const { target } = event;

        if (target.tagName !== "A") {
            return;
        }

        const hash = target.getAttribute("href");

        if (!hash || hash.charAt(0) !== "#") {
            return;
        }

        this.jumpToHash(hash);
    };

    jumpToHash = (hash) => {
        const { scrollbar } = this;

        if (!hash) {
            return;
        }

        // reset scrollTop
        scrollbar.containerEl.scrollTop = 0;

        scrollbar.scrollIntoView(document.querySelector(hash));
    };

    onInit() {
        this.jumpToHash(window.location.hash);

        window.addEventListener("hashchange", this.onHashChange);

        this.scrollbar.contentEl.addEventListener("click", this.onClick);
    }

    onDestory() {
        window.removeEventListener("hashchange", this.onHashChange);

        this.scrollbar.contentEl.removeEventListener("click", this.onClick);
    }
}

Scrollbar.use(AnchorPlugin);
Scrollbar.use(DisableScrollPlugin);

export function initScrollBar() {
    const pageSmoothScroll = Scrollbar.init(document.body, options);
    const scrollToTop = document.getElementById("scroll-to-top");
    const header = document.getElementById("header");
    pageSmoothScroll.track.xAxis.element.remove();

    pageSmoothScroll.addListener(({ offset }) => {
        updatePosition(scrollToTop, offset);
        updatePosition(header, offset);
    });

    return pageSmoothScroll;
}

function updatePosition(element, offset) {
    element.classList.toggle("show", offset.y > window.innerHeight / 2);
    element.style.setProperty("--raw-top", offset.y);
}

export default Scrollbar;
