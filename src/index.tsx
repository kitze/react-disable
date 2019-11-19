import * as React from 'react';

export const DisabledContext = React.createContext(false);

export const Disable: React.FC<{
  disabled: boolean;
  as?: string;
  rest?: any;
  disabledStyles?: any;
  disabledOpacity?: number;
  disabledProps?: any;
}> = ({
  children,
  as = 'div',
  disabledOpacity = 0.3,
  disabledStyles,
  disabledProps,
  disabled,
  ...rest
}) => {
  const disableEvent = (e: any) => {
    if (disabled) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const isParentDisabled = React.useContext(DisabledContext);
  const shouldDisable = isParentDisabled ? false : disabled;

  return (
    <DisabledContext.Provider value={disabled}>
      {React.createElement(
        as,
        {
          style: {
            transition: 'all 100ms linear',
            ...(shouldDisable && {
              opacity: disabledOpacity,
              pointerEvents: 'none',
              ...disabledStyles,
            }),
          },
          ...(shouldDisable && { tabIndex: -1, ...disabledProps }),
          onKeyDown: disableEvent,
          onClick: disableEvent,
          disabled: shouldDisable,
          ...rest,
        },
        children
      )}
    </DisabledContext.Provider>
  );
};
