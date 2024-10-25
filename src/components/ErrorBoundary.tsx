import React, {Component, ErrorInfo, ReactNode} from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return {hasError: true}
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo){
    console.error("Caught error:", error, errorInfo)
  }

  render(): React.ReactNode {
    if(this.state.hasError) {
      return <h2>Something went wrong. Please try again later</h2>
    }
    return this.props.children;
  }
}

export default ErrorBoundary;