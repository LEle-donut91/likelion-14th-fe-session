// toDoList -> toDoItem -> toDoCheckBox, toDoTxt(toDoInput), deleteBtn
// DOMContentLoaded 이벤트 리스너 (화살표 함수)
document.addEventListener('DOMContentLoaded', () => {
    // 구조 분해 할당 (입력창, 추가 버튼, 할 일 List)
    const [toDoInput, addButton, toDoList] = [document.querySelector('.todo-input'), document.querySelector('.add-btn'), document.querySelector('.todo-list')]

    // 추가 버튼 클릭 이벤트 리스너 (화살표 함수)
    addButton.addEventListener('click', (event) => {

        // 구조 분해 할당 (할 일 Item, 할 일 체크박스, 할 일 Text, 삭제 버튼)
        const [toDoItem, toDoCheckBox, toDoTxt, deleteBtn] = [document.createElement('li'), document.createElement('input'), document.createElement('span'), document.createElement('button')]

        toDoCheckBox.setAttribute('type', 'checkbox') // 체크박스 타입 설정
        toDoTxt.textContent = toDoInput.value // 사용자가 입력한 내용 저장
        deleteBtn.classList.add('delete-btn') // 삭제 버튼 스타일 지정

        // 2초 후 "할 일 추가 완료!" 알림 표시 (비동기 처리)
        setTimeout(function callback() {
            toDoInput.value = '' // 입력창의 Text 지우기

            // 할 일 Item에 [체크박스, 할 일 Text, 삭제 버튼] 추가
            toDoItem.appendChild(toDoCheckBox)
            toDoItem.appendChild(toDoTxt)
            toDoItem.appendChild(deleteBtn)

            // 할 일 Item -> 할 일 List에 추가
            toDoList.appendChild(toDoItem)
            alert("할 일 추가 완료!")
        }, 2000)

        
        // 체크박스 클릭 이벤트 리스너 (화살표 함수)
        toDoCheckBox.addEventListener('change', (event) => {
            // "체크된 상태"일 때 스타일 지정
            if (toDoCheckBox.checked) {
                toDoTxt.classList.add('checked_txt')
            }

            // "체크 안 된 상태"일 때 스타일 지정
            else {
                toDoTxt.classList.remove('checked_txt')
            }
        })

        // 삭제 버튼 클릭 이벤트 리스너 (화살표 함수)
        deleteBtn.addEventListener('click', (event) => {
            // 해당 "삭제 버튼"의 부모 노드 접근 -> 삭제할 Item
            const item = event.target.parentElement

            // 1초 후 삭제 + 알림
            setTimeout(function callback() {
                item.remove() // Item 삭제
                alert(`${item.innerText} 삭제 완료!`) // 템플릿 리터럴 -> ex) "공부하기" 삭제 완료!
            }, 1000)
        })
    })
})
