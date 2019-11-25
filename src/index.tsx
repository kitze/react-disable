import * as React from 'react';

export const DisabledContext = React.createContext(false);

export const Disable: React.FC<{
  as?: string;
  disabled: boolean;
  disabledProps?: any;
  disabledStyles?: React.CSSProperties;
  disabledOpacity?: number;
}> = ({
  as = 'div',
  children,
  disabled,
  disabledProps,
  disabledStyles,
  disabledOpacity = 0.3,
  ...rest
}) => {
  const isParentDisabled = React.useContext(DisabledContext);
  const shouldDisable = isParentDisabled ? false : disabled;
  const disableEvent = React.useCallback(
    (e: React.SyntheticEvent) => {
      e.persist();

      if (shouldDisable) {
        e.preventDefault();
        e.stopPropagation();
      }
    },
    [shouldDisable]
  );

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
              userSelect: 'none',
              ...disabledStyles,
            }),
          },
          onClick: disableEvent,
          onKeyDown: disableEvent,
          ...(shouldDisable && {
            tabIndex: -1,
            'aria-hidden': 'true',
            ...disabledProps,
          }),
          ...rest,
        },
        children
      )}
    </DisabledContext.Provider>
  );
};
