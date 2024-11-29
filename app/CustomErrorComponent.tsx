'use client';

import React, { ErrorInfo } from 'react';

export type CustomErrorComponentProps = {
    error?: Error;
    children?: React.ReactNode;
};

export type CustomErrorComponentState = {
    hasError: boolean;
    error: Error | null;
};

class CustomErrorComponent extends React.Component<CustomErrorComponentProps, CustomErrorComponentState> {
    constructor(props: CustomErrorComponentProps) {
        super(props);

        // Define a state variable to track whether is an error or not
        this.state = {
            hasError: false,
            error: null,
        };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // You can use your own error logging service here
        console.log({ error, errorInfo });
    }

    render() {
        // Check if the error is thrown
        if (this.state.hasError) {
            return (
                <div>
                    <h2>Oops, there is an error!</h2>
                    {this.props.error && (
                        <code>
                            {this.props.error.toString()}
                        </code>
                    )}
                    <button
                        type="button"
                        onClick={() => this.setState({ hasError: false })}
                    >
                        Try again?
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default CustomErrorComponent;
