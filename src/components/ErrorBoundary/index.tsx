import React, { PureComponent } from 'react';

interface IErrorBoundaryState {
  hasError: boolean;
  errorInfo: IErrorInfo;
}

interface IErrorInfo {
  componentStack: string;
}

interface IErrorBoundaryProps {
  children?: React.ReactNode;
}

class ErrorBoundary extends PureComponent<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: !!error,
      errorInfo,
    });
  }

  render(): React.ReactNode {
    const { hasError, errorInfo } = this.state;
    const { children } = this.props;
    if (hasError) {
      // You can render any custom fallback UI
      return <h1>{errorInfo.componentStack}</h1>;
    }

    return children;
  }
}

export default ErrorBoundary;
