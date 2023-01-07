import React from 'react';

const DbModal = () => {

    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal" style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
                <div className="modal-box relative">
                    <label for="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <p className="text-lg text-red-600 font-bold">Lorem ipsum dolor sit amet.</p>
                    <div className="chartContainer">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DbModal;