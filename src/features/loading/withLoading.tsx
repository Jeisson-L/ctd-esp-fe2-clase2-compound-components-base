import { FC } from 'react';

interface WrappedComponentProps {
  isLoading: boolean;
  onFailedToLoad: boolean;
}

export const withLoading = <T extends WrappedComponentProps>(WrappedComponent: FC<T>) => {
  return function (props: T) {
    if (props.onFailedToLoad === true) return <>Error</>;

    if (props.isLoading) return <>Loading ...</>;

    return <WrappedComponent {...props} />;
  };
};