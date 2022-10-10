import React, { useMemo } from 'react';
import { useOverlayTriggerState } from 'react-stately';
import {
  useOverlayPosition,
  useOverlayTrigger,
  OverlayContainer,
  useOverlay,
  useDialog,
  useButton,
  useId,
  DismissButton,
  FocusScope,
} from 'react-aria';
import cls from 'classnames';

import { IPopover } from './type';

//TODO: implement destroy on close

const Popover: IPopover = (props) => {
  const {
    isOpen,
    defaultOpen,
    onOpenChange,
    onClose,
    offset = 10,
    placement = 'bottom left',
    shouldUpdatePosition,
    boundaryElement,
    shouldFlip = true,
    containerPadding,
    crossOffset,
    maxHeight,
    scrollRef,
    targetRef,
    shouldCloseOnInteractOutside,

    isKeyboardDismissDisabled = false,
    isDismissable = true,
    shouldCloseOnBlur = true,

    triggerElement,
    children,

    arrow = true,
    // destroyOnClose = false,
    overlayClassName,

    title,
    content,
    footer,
    id,
  } = props;

  // trigger and overlay ref
  const triggerRef =
    (targetRef as React.MutableRefObject<any>) || React.useRef<any>(null);
  const overlayRef = React.useRef<any>(null);

  const state = useOverlayTriggerState({ isOpen, defaultOpen, onOpenChange });

  const { triggerProps, overlayProps: overlayAttributeProps } =
    useOverlayTrigger({ type: 'dialog' }, state, triggerRef);

  const buttonAria = useButton(triggerProps, triggerRef);

  // Get popover positioning props relative to the trigger
  const { overlayProps: positionProps, arrowProps } = useOverlayPosition({
    isOpen: state.isOpen,
    onClose: onClose || state.close,
    offset,
    placement,
    shouldUpdatePosition,
    boundaryElement,
    shouldFlip,
    containerPadding,
    targetRef: triggerRef,
    overlayRef,
    crossOffset,
    maxHeight,
    scrollRef,
  });

  const { overlayProps } = useOverlay(
    {
      onClose: onClose || state.close,
      isOpen: state.isOpen,
      isDismissable,
      isKeyboardDismissDisabled,
      shouldCloseOnBlur,
      shouldCloseOnInteractOutside: (element) => {
        const trigger = triggerRef.current as unknown as Element;

        // if controllable popover, auto disable click outside
        return isOpen === undefined
          ? element !== triggerRef.current && !trigger.contains(element)
          : !!shouldCloseOnInteractOutside?.(element);
      },
    },
    overlayRef,
  );

  // dialog accessible
  const ID = useId(id);
  const { dialogProps } = useDialog(
    { id: ID, 'aria-describedby': `popover${ID}` },
    triggerRef,
  );

  // render trigger
  const renderTrigger =
    typeof triggerElement === 'function' ? (
      triggerElement(state, triggerRef, buttonAria.buttonProps)
    ) : React.isValidElement(triggerElement) ? (
      React.cloneElement(triggerElement, {
        ref: triggerRef,
        ...buttonAria.buttonProps,
      })
    ) : (
      <span {...buttonAria.buttonProps} ref={triggerRef} />
    );

  // render child
  const renderTitle = () => {
    return children
      ? null
      : title && <Popover.Header className="font-bold">{title}</Popover.Header>;
  };

  const renderContent = () => {
    return children
      ? null
      : content && <Popover.Content>{content}</Popover.Content>;
  };

  const renderFooter = () => {
    return children
      ? null
      : footer && <Popover.Footer>{footer}</Popover.Footer>;
  };

  // class
  const arrowCls = useMemo(() => {
    const position = placement.split(' ')[0] || 'bottom';

    return cls('absolute transition-all', {
      'arrow-bottom': position === 'bottom',
      'arrow-top': position === 'top',
      'arrow-left': position === 'left',
      'arrow-right': position === 'right',
    });
  }, [placement]);

  const overlayCls = useMemo(() => {
    return cls('overlay duration-300', overlayClassName, {
      'invisible opacity-0': !state.isOpen,
      'visible opacity-1': state.isOpen,
    });
  }, [overlayClassName, state.isOpen]);

  // implement destroy on close
  // const mountedRef = React.useRef(false);
  // if (!mountedRef.current && state.isOpen) {
  //   mountedRef.current = true;
  // }
  // if (destroyOnClose) {
  //   mountedRef.current = state.isOpen;
  // }

  // check SSR
  return (
    <React.Fragment>
      {renderTrigger}

      {state.isOpen && (
        <OverlayContainer>
          <FocusScope contain restoreFocus autoFocus>
            <div
              {...dialogProps}
              {...overlayAttributeProps}
              {...overlayProps}
              {...positionProps}
              ref={overlayRef}
              className={overlayCls}
            >
              {arrow && <span className={arrowCls} {...arrowProps} />}
              <div className={cls('overlay_wrapper')}>
                {renderTitle()}
                {renderContent()}
                {renderFooter()}
                {typeof children === 'function' ? children(state) : children}
              </div>
              <DismissButton onDismiss={onClose || state.close} />
            </div>
          </FocusScope>
        </OverlayContainer>
      )}
    </React.Fragment>
  );
};

Popover.Header = ({ className, children }) => {
  return <div className={cls('overlay_title', className)}>{children}</div>;
};

Popover.Content = ({ className, children }) => {
  return <div className={cls('overlay_content', className)}>{children}</div>;
};

Popover.Footer = ({ children, className }) => {
  return <div className={cls('overlay_footer', className)}>{children}</div>;
};

Popover.Content.displayName = 'PopoverContent';
Popover.Header.displayName = 'PopoverHeader';
Popover.Footer.displayName = 'PopoverFooter';

export default Popover;
