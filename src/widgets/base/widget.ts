import { BuderStyle } from "../../styles";

export class BuderWidget {
  constructor() {}

  protected _style: BuderStyle = {};
  protected _events: { [key: string]: (e: any) => void } = {};

  render(el?: HTMLElement): HTMLElement {
    if (!el) {
      el = document.createElement("div");
    }
    for (const key in this._style) {
      const value = (this._style as any)[key];
      if (value instanceof Object) {
        (el.style as any)[key] = `${value.value}${value.unit}`;
      } else {
        (el.style as any)[key] = value;
      }
    }

    // Add event listeners
    for (const key in this._events) {
      el.addEventListener(key, this._events[key]);
    }
    return el;
  }

  style(s: BuderStyle): BuderWidget {
    this._style = Object.assign(this._style, s);
    return this;
  }

  private _setEvent(event: string, func: (e: any) => void): BuderWidget {
    this._events[event] = func;
    return this;
  }

  onCopy(func: (e: ClipboardEvent) => void): BuderWidget {
    return this._setEvent("copy", func);
  }
  onCut(func: (e: ClipboardEvent) => void): BuderWidget {
    return this._setEvent("cut", func);
  }
  onPaste(func: (e: ClipboardEvent) => void): BuderWidget {
    return this._setEvent("paste", func);
  }
  onCompositionEnd(func: (e: CompositionEvent) => void): BuderWidget {
    return this._setEvent("compositionend", func);
  }
  onCompositionStart(func: (e: CompositionEvent) => void): BuderWidget {
    return this._setEvent("compositionstart", func);
  }
  onCompositionUpdate(func: (e: CompositionEvent) => void): BuderWidget {
    return this._setEvent("compositionupdate", func);
  }
  onDrag(func: (e: DragEvent) => void): BuderWidget {
    return this._setEvent("drag", func);
  }
  onDragEnd(func: (e: DragEvent) => void): BuderWidget {
    return this._setEvent("dragend", func);
  }
  onDragEnter(func: (e: DragEvent) => void): BuderWidget {
    return this._setEvent("dragenter", func);
  }
  onDragExit(func: (e: DragEvent) => void): BuderWidget {
    return this._setEvent("dragexit", func);
  }
  onDragLeave(func: (e: DragEvent) => void): BuderWidget {
    return this._setEvent("dragleave", func);
  }
  onDragOver(func: (e: DragEvent) => void): BuderWidget {
    return this._setEvent("dragover", func);
  }
  onDragStart(func: (e: DragEvent) => void): BuderWidget {
    return this._setEvent("dragstart", func);
  }
  onDrop(func: (e: DragEvent) => void): BuderWidget {
    return this._setEvent("drop", func);
  }
  onFocus(func: (e: FocusEvent) => void): BuderWidget {
    return this._setEvent("focus", func);
  }
  onFocusIn(func: (e: FocusEvent) => void): BuderWidget {
    return this._setEvent("focusin", func);
  }
  onFocusOut(func: (e: FocusEvent) => void): BuderWidget {
    return this._setEvent("focusout", func);
  }
  onBlur(func: (e: FocusEvent) => void): BuderWidget {
    return this._setEvent("blur", func);
  }
  onChange(func: (e: Event) => void): BuderWidget {
    return this._setEvent("change", func);
  }
  onBeforeInput(func: (e: Event) => void): BuderWidget {
    return this._setEvent("beforeinput", func);
  }
  onInput(func: (e: Event) => void): BuderWidget {
    return this._setEvent("input", func);
  }
  onReset(func: (e: Event) => void): BuderWidget {
    return this._setEvent("reset", func);
  }
  onSubmit(func: (e: Event) => void): BuderWidget {
    return this._setEvent("submit", func);
  }
  onInvalid(func: (e: Event) => void): BuderWidget {
    return this._setEvent("invalid", func);
  }
  onLoad(func: (e: Event) => void): BuderWidget {
    return this._setEvent("load", func);
  }
  onError(func: (e: Event) => void): BuderWidget {
    return this._setEvent("error", func);
  }
  onKeydown(func: (e: KeyboardEvent) => void): BuderWidget {
    return this._setEvent("keydown", func);
  }
  onKeypress(func: (e: KeyboardEvent) => void): BuderWidget {
    return this._setEvent("keypress", func);
  }
  onKeyup(func: (e: KeyboardEvent) => void): BuderWidget {
    return this._setEvent("keyup", func);
  }
  onAuxClick(func: (e: MouseEvent) => void): BuderWidget {
    return this._setEvent("auxclick", func);
  }
  onClick(func: (e: MouseEvent) => void): BuderWidget {
    return this._setEvent("click", func);
  }
  onContextMenu(func: (e: MouseEvent) => void): BuderWidget {
    return this._setEvent("contextmenu", func);
  }
  onDblClick(func: (e: MouseEvent) => void): BuderWidget {
    return this._setEvent("dblclick", func);
  }
  onMouseDown(func: (e: MouseEvent) => void): BuderWidget {
    return this._setEvent("mousedown", func);
  }
  onMouseEnter(func: (e: MouseEvent) => void): BuderWidget {
    return this._setEvent("mouseenter", func);
  }
  onMouseLeave(func: (e: MouseEvent) => void): BuderWidget {
    return this._setEvent("mouseleave", func);
  }
  onMouseMove(func: (e: MouseEvent) => void): BuderWidget {
    return this._setEvent("mousemove", func);
  }
  onMouseOut(func: (e: MouseEvent) => void): BuderWidget {
    return this._setEvent("mouseout", func);
  }
  onMouseOver(func: (e: MouseEvent) => void): BuderWidget {
    return this._setEvent("mouseover", func);
  }
  onMouseUp(func: (e: MouseEvent) => void): BuderWidget {
    return this._setEvent("mouseup", func);
  }
  onAbort(func: (e: Event) => void): BuderWidget {
    return this._setEvent("abort", func);
  }
  onCanPlay(func: (e: Event) => void): BuderWidget {
    return this._setEvent("canplay", func);
  }
  onCanPlayThrough(func: (e: Event) => void): BuderWidget {
    return this._setEvent("canplaythrough", func);
  }
  onDurationChange(func: (e: Event) => void): BuderWidget {
    return this._setEvent("durationchange", func);
  }
  onEmptied(func: (e: Event) => void): BuderWidget {
    return this._setEvent("emptied", func);
  }
  onEncrypted(func: (e: Event) => void): BuderWidget {
    return this._setEvent("encrypted", func);
  }
  onEnded(func: (e: Event) => void): BuderWidget {
    return this._setEvent("ended", func);
  }
  onLoadedData(func: (e: Event) => void): BuderWidget {
    return this._setEvent("loadeddata", func);
  }
  onLoadedMetadata(func: (e: Event) => void): BuderWidget {
    return this._setEvent("loadedmetadata", func);
  }
  onLoadStart(func: (e: Event) => void): BuderWidget {
    return this._setEvent("loadstart", func);
  }
  onPause(func: (e: Event) => void): BuderWidget {
    return this._setEvent("pause", func);
  }
  onPlay(func: (e: Event) => void): BuderWidget {
    return this._setEvent("play", func);
  }
  onPlaying(func: (e: Event) => void): BuderWidget {
    return this._setEvent("playing", func);
  }
  onProgress(func: (e: Event) => void): BuderWidget {
    return this._setEvent("progress", func);
  }
  onRateChange(func: (e: Event) => void): BuderWidget {
    return this._setEvent("ratechange", func);
  }
  onSeeked(func: (e: Event) => void): BuderWidget {
    return this._setEvent("seeked", func);
  }
  onSeeking(func: (e: Event) => void): BuderWidget {
    return this._setEvent("seeking", func);
  }
  onStalled(func: (e: Event) => void): BuderWidget {
    return this._setEvent("stalled", func);
  }
  onSuspend(func: (e: Event) => void): BuderWidget {
    return this._setEvent("suspend", func);
  }
  onTimeUpdate(func: (e: Event) => void): BuderWidget {
    return this._setEvent("timeupdate", func);
  }
  onVolumeChange(func: (e: Event) => void): BuderWidget {
    return this._setEvent("volumechange", func);
  }
  onWaiting(func: (e: Event) => void): BuderWidget {
    return this._setEvent("waiting", func);
  }
  onSelect(func: (e: Event) => void): BuderWidget {
    return this._setEvent("select", func);
  }
  onScroll(func: (e: UIEvent) => void): BuderWidget {
    return this._setEvent("scroll", func);
  }
  onTouchCancel(func: (e: TouchEvent) => void): BuderWidget {
    return this._setEvent("touchcancel", func);
  }
  onTouchEnd(func: (e: TouchEvent) => void): BuderWidget {
    return this._setEvent("touchend", func);
  }
  onTouchMove(func: (e: TouchEvent) => void): BuderWidget {
    return this._setEvent("touchmove", func);
  }
  onTouchStart(func: (e: TouchEvent) => void): BuderWidget {
    return this._setEvent("touchstart", func);
  }
  onPointerDown(func: (e: PointerEvent) => void): BuderWidget {
    return this._setEvent("pointerdown", func);
  }
  onPointerMove(func: (e: PointerEvent) => void): BuderWidget {
    return this._setEvent("pointermove", func);
  }
  onPointerUp(func: (e: PointerEvent) => void): BuderWidget {
    return this._setEvent("pointerup", func);
  }
  onPointerCancel(func: (e: PointerEvent) => void): BuderWidget {
    return this._setEvent("pointercancel", func);
  }
  onPointerEnter(func: (e: PointerEvent) => void): BuderWidget {
    return this._setEvent("pointerenter", func);
  }
  onPointerLeave(func: (e: PointerEvent) => void): BuderWidget {
    return this._setEvent("pointerleave", func);
  }
  onPointerOver(func: (e: PointerEvent) => void): BuderWidget {
    return this._setEvent("pointerover", func);
  }
  onPointerOut(func: (e: PointerEvent) => void): BuderWidget {
    return this._setEvent("pointerout", func);
  }
  onWheel(func: (e: WheelEvent) => void): BuderWidget {
    return this._setEvent("wheel", func);
  }
  onAnimationStart(func: (e: AnimationEvent) => void): BuderWidget {
    return this._setEvent("animationstart", func);
  }
  onAnimationEnd(func: (e: AnimationEvent) => void): BuderWidget {
    return this._setEvent("animationend", func);
  }
  onAnimationIteration(func: (e: AnimationEvent) => void): BuderWidget {
    return this._setEvent("animationiteration", func);
  }
  onTransitionEnd(func: (e: TransitionEvent) => void): BuderWidget {
    return this._setEvent("transitionend", func);
  }
  onTransitionStart(func: (e: TransitionEvent) => void): BuderWidget {
    return this._setEvent("transitionstart", func);
  }
}
