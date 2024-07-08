"use client";
import {
  DependencyList,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
export const useOverflow = <T extends HTMLElement>(options?: {
  width?: boolean;
  height?: boolean;
  cb?: (ref: T | null, isOverflow: boolean) => void;
  triggerDep?: DependencyList;
}) => {
  const [overflow, setOverflow] = useState(false);
  const { width = true, height = false, cb, triggerDep = [] } = options || {};

  const ref = useRef<T | null>(null);
  const makeTrigger = useCallback((node: typeof ref.current | null) => {
    ref.current = node;
  }, triggerDep);

  const trigger = useCallback(() => {
    if (!ref || !ref.current) return;
    const widthOverflow =
      width && ref.current?.scrollWidth > ref.current?.clientWidth;
    const heightOverflow =
      height && ref.current?.scrollHeight > ref.current?.clientHeight;
    const isOverflow = widthOverflow || heightOverflow;
    setOverflow(isOverflow);
    cb?.(ref.current, isOverflow);
  }, [width, height, cb, makeTrigger, ref]);

  let observer: ResizeObserver | null = null;

  useLayoutEffect(() => {
    if (!ref || !ref.current) return;
    trigger();
    (observer as ResizeObserver)?.disconnect();
    observer = new ResizeObserver(trigger);
    observer.observe(ref.current);
  }, [ref.current]);

  return { overflow, trigger, makeTrigger };
};

export default useOverflow;
