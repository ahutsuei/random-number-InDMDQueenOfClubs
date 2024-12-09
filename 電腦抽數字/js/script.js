document.getElementById('generate-btn').addEventListener('click', function () {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);
    const output = document.getElementById('output');

    // 驗證輸入範圍
    if (isNaN(min) || isNaN(max)) {
        output.textContent = '請輸入有效的數字範圍！';
        output.style.color = 'red';
    } else if (min > max) {
        output.textContent = '最小範圍不能大於最大範圍！';
        output.style.color = 'red';
    } else {
        // 生成隨機數
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        output.textContent = `隨機抽取的數字是：${randomNumber}`;
        output.style.color = 'green';
    }
});
