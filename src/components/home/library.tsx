import PlusButton from "@/public/images/plus.svg";

export function AddLibrary() {
    return (
        <button>
            <PlusButton />
        </button>
    );
}

export function DummyLibrary() {
    return (
        <div className="">
            <nav>
                <ul className="">

                </ul>
            </nav>
        </div>
    );
}

export function Library() {
    return (
        <h1>DummyLibrary</h1>
    );
}