import React, {Component} from "react";
import JSONEditor, {JSONEditorOptions} from "jsoneditor";
import "jsoneditor/dist/jsoneditor.css";

export type JsonEditorProperties = {
    json?: object,
    options?: JSONEditorOptions
};

export default class JsonEditor extends Component<JsonEditorProperties, any> {

    #element: HTMLElement;
    #json_editor: JSONEditor;

    componentDidMount() {
        const defaultOptions: JSONEditorOptions = {
            mode: "tree",
            enableTransform: false
        };
        this.#json_editor = new JSONEditor(
            this.#element,
            { ...defaultOptions, ...this.props.options },
            this.props.json ?? {});
    }

    componentWillUnmount() {
        this.#json_editor?.destroy();
    }

    componentDidUpdate() {
        this.#json_editor.update(this.props.json);
    }

    render() {
        return (
            <div ref={element => this.#element = element} />
        );
    }

}
