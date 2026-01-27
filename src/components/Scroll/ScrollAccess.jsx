import { ScrollbarPlugin } from "smooth-scrollbar";
import Scrollbar from "smooth-scrollbar";
 

const scrollMap = new WeakMap();
const scrollKey = {}

export function setScrollBar(scroll) {
  scrollMap.set(scrollKey, scroll);
}

export function getScrollBar() {
  return scrollMap.get(scrollKey);
}

export function clearScrollBar() {

  if (getScrollBar()) {
 
    getScrollBar().destroy()
    scrollMap.delete(scrollKey);
 
  }
}
 

class OverflowPlugin extends ScrollbarPlugin {
  static pluginName = "overflow";

  static defaultOptions = {
    open: false,
  };

  transformDelta(delta) {
    return this.options.open ? { x: 0, y: 0 } : delta;
  }
}

Scrollbar.use(OverflowPlugin);