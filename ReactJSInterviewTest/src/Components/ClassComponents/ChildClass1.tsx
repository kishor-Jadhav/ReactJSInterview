import React from "react";
import { AppClassContext } from "./FunctionComponent";

interface ChildClass1Props {
    countMain: number;
}

export default class ChildClass1 extends React.Component<ChildClass1Props> {
    static contextType = AppClassContext;
    context!: React.ContextType<typeof AppClassContext>;

    constructor(props: ChildClass1Props) {
        super(props);
        this.state = {};
    }

    componentDidMount(): void {
        console.log('child component start...');
    }

    componentDidUpdate(prevProps: Readonly<ChildClass1Props>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log('Child Pre props', prevProps);
        console.log('Child new props', this.props);
    }

    render(): React.ReactNode {
        const handleChange = () => {
            if (this.context) {
                this.context.setColor('green');
            }
        };

        // Check if context is defined
        if (!this.context) {
            return <div>Error: Context is not available</div>;
        }

        return (
            <>
                <h1 style={{ color: this.context.color }}>Child Component 1</h1>
                <h1>Child Count - {this.props.countMain}</h1>
                <button onClick={handleChange}>Change Color</button>
            </>
        );
    }
}
