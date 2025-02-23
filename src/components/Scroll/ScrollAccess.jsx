
const tweenMap = new WeakMap();
const tweenKey = {}

export function setScrollTween(tween) {
  if (getScrollTween()) {
    getScrollTween().kill()
  }
  tweenMap.set(tweenKey, tween);
  
}

export function getScrollTween() {
  return tweenMap.get(tweenKey);
}

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

export function clearScrollTween() {
  const tween = getScrollTween();
 
 
  if (tween) {
    tweenMap.delete(tweenKey);
  }
}
