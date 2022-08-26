import React from 'react';

const DbModal = () => {

    return (
        <div>
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal" style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
                <div class="modal-box relative">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <p class="text-lg text-red-600 font-bold">Lorem ipsum dolor sit amet.</p>
                    <div className="chartContainer">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DbModal;