import React, { useState } from "react";
import axios from "axios";
import { render } from "@testing-library/react";

export default function MainSection() {
    const [state, setState] = useState({
        name: "",
        description: "",
        title: "",
        inputs: [],
        outputs: [],
        script: "",
    });

    const onChangeHandler = async (e) => {
        const file = e.target.files[0];
        const data = new FormData();
        data.append("file", file);
        const res = await axios.post(
            "http://172.16.102.127:3000/script/upload",
            data
        );
        const { inputs, outputs, filename } = res.data;
        console.log(inputs);
        setState((state) => ({
            ...state,
            ...{
                inputs,
                outputs,
                script: filename,
            },
        }));
    };

    if (state.script) {
        return(
            <div>hello</div>
        )
    }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group files">
                            <label>Upload Your File </label>
                            <input
                                type="file"
                                className="form-control"
                                onChange={onChangeHandler}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
}
