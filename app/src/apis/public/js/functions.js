const viewList = async () => {
    const arr = [];
    // response 리턴할 변수 (받은 데이터 저장)

    await fetch("/home", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(),
    })
        .then(response => response.json())
        .then(json => json.data)
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                arr.push({ no: data[i].no, todo: data[i].todo });
            }
        });
    return arr;
    // response 에 저장
};
// DB에서 list가져와 화면에 출력

const addList = (todo, check) => {
    const req = {
        content: todo.value,
        is_check: check,
    };
    fetch("/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    });
};
// DB에 추가

const editList = (content, isCheck, no) => {
    const req = {
        content: content.value,
        isCheck: isCheck,
        no: no,
    };

    fetch("/", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    });
};
// DB에서 수정

const deleteList = no => {
    const req = {
        deleteList: no,
    };
    fetch("/", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    });
};
// DB에서 삭제

export { viewList, addList, editList, deleteList };
