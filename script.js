$(function () {
    let boldStat = 0;
    $('#boldText').on('click', function () {
        if(boldStat == 0){
            $('#box').css({fontWeight: 'bold'});
            boldStat = 1
        }
        else {
            $('#box').css({fontWeight: 'normal'});
            boldStat = 0
        }

    });
    let italicStat = 0;
    $('#italicText').on('click', function () {
        if(italicStat == 0){
            $('#box').css({fontStyle: 'italic'});
            italicStat = 1
        }
        else {
            $('#box').css({fontStyle: 'normal'});
            italicStat = 0
        }

    });
    let undStat = 0;
    $('#underText').on('click', function () {
        if(undStat == 0){
            $('#box').css({textDecoration: 'underline'});
            undStat = 1
        }
        else {
            $('#box').css({textDecoration: 'none'});
            undStat = 0
        }

    });
    let strikeStat = 0;
    $('#strikeText').on('click', function () {
        if(strikeStat == 0){
            $('#box').css({textDecoration: 'line-through'});
            strikeStat = 1
        }
        else {
            $('#box').css({textDecoration: 'none'});
            strikeStat = 0
        }

    });
    $('#leftText').on('click', function () {
            $('#box').css({textAlign: 'left'});

    });
    $('#centerText').on('click', function () {
            $('#box').css({textAlign: 'center'});

    });
    $('#rightText').on('click', function () {
            $('#box').css({textAlign: 'right'});

    });
    $('.fontSiz').on('click', function () {
        $('#box').css({fontSize: $(this).text()});
    });

    $('.fontFam').on('click', function () {
        $('#box').css({fontFamily: $(this).text()});
    });
    $('.colorSet').on('click', function () {
        $('body').css({color: $(this).css('background-color')});
    });
    //    BACKGROUNDS
    $('.BgColor').on('click', function () {
        $('.backgroundsBlock').css({
            display: 'block'
        })
        $('.greyWrapper').css({
            display: 'block'
        })
    });
    $(document).mouseup(function (e) {
        if ($(".backgroundsBlock").has(e.target).length === 0) {
            $(".backgroundsBlock").hide();
            $('.greyWrapper').css({
                display: 'none'
            })
        }
    });

    $('.colorSet2').on('click', function () {
        $('body').css({
            backgroundColor: $(this).css('background-color'),
        backgroundImage: ''});
    });

    $('.backgroundImageBlockItem').on('click', function () {
        $('body').css({backgroundImage: $(this).css('background-image')});
    });


    $('#navContactTab').on('click', function () {
        $(".backgroundsBlock").css({
            height: '120px'
        });
    });

    $('#navHomeTab').on('click', function () {
        $(".backgroundsBlock").css({
            height: '270px'
        });
    });

    $('#navProfileTab').on('click', function () {
        $(".backgroundsBlock").css({
            height: '355px'
        });
    });

    $('#inputGroupFile01').on("change", function () {
        if (this.files[0]) {
            let fr = new FileReader();
            fr.addEventListener("load", function () {
                $('body').css({
                    backgroundImage: "url(" + fr.result + ")"
                });
            }, false);
            fr.readAsDataURL(this.files[0]);
        }
    });
// LOGIN
    $('#loginButton').on('click', () => {
        $('.loginPanelGreyWrapper').css({
            display: 'block'
        });
        $('.loginPanel').css({
            display: 'block'
        })
    });
    let formLogin = document.getElementById('formLogin');
    $('#signButton').on('click', function () {

        let loginVal = document.getElementById('exampleInputEmail1').value;
        let passwordVal = document.getElementById('exampleInputPassword1').value;
        if (loginVal === 'admin' && passwordVal === 'admin') {
            $('.loginPanelGreyWrapper').css({
                display: 'none'
            });
            $('.loginPanel').css({
                display: 'none'
            });
            formLogin.reset();
        }
        else(alert('Невірний login або password'))
    })
    let edit = document.getElementById('edit');
    let editContainer = document.getElementById('editContainer');
    edit.addEventListener('click', () => {
        $('.firstBut').css({
            display: 'none'
        });
        $('.editButtons').css({
            display: 'block'
        });
        $('#edit').css({
            display: 'none'
        });
        $('#box').css({
            display: 'none'
        });
        editContainer.value = $('#box').html();
        editContainer.style.display = 'block'
    });
    //    SAVE CHANGES
    $('#saveChanges').on('click', function () {
        $('.firstBut').css({
            display: 'block'
        });
        $('.editButtons').css({
            display: 'none'
        });

        edit.style.display = 'block';
        $('#box').css({
            display: 'block'
        });
        editContainer.style.display = 'none';
        $('#box').html(editContainer.value)
    });
    //    TABLE
    let tableContainer = document.querySelector('.tableContainer')
    let tableButton = document.getElementById('tableButton')
    tableButton.addEventListener('click', () => {
        tableContainer.style.display = 'block'
        $('.greyWrapper').css({
            display: 'block'
        })
    });
    $(document).mouseup(function (e) {
        if ($(".tableContainer").has(e.target).length === 0) {
            $(".tableContainer").hide()
        }
    });
    let countTr = document.getElementById('countTr');
    let countTd = document.getElementById('countTd');
    let widthTd = document.getElementById('widthTd');
    let heightTd = document.getElementById('heightTd');
    let widthBorder = document.getElementById('widthBorder');
    let styleBorder = document.getElementById('styleBorder');
    let colorBorder = document.getElementById('colorBorder');
    let tableSaveBlock = document.getElementById('tableSaveBlock');
    let createTableBtn = document.getElementById('createTableBtn');
    let resetTableContainer = document.getElementById('resetTableContainer');
    let table = document.createElement('table');
    createTableBtn.addEventListener('click', () => {
        for (i = 1; i <= countTr.value; i++) {
            let tr = document.createElement('tr');
            table.appendChild(tr);
            for (j = 1; j <= countTd.value; j++) {
                let td = document.createElement('td');
                tr.appendChild(td);
                td.style.width = widthTd.value + 'px';
                td.style.height = heightTd.value + 'px';
                td.innerHTML = "TD";
                td.style.borderWidth = widthBorder.value + 'px';
                td.style.borderStyle = styleBorder.value;
                td.style.borderColor = colorBorder.value;
                table.style.borderCollapse = 'collapse';
                tableSaveBlock.appendChild(table);
            }
        }
        editContainer.value = editContainer.value + tableSaveBlock.innerHTML
    });
    resetTableContainer.addEventListener('click', () => {
        tableform.reset();
    });
    //    OL LIST
    olListBtn.addEventListener('click', () => {
    $('.olListBlock').css({
        display: 'block'
    });
        $('.greyWrapper').css({
            display: 'block'
        })
    });
    $(document).mouseup(function (e) {
        if ($(".olListBlock").has(e.target).length === 0) {
            $(".olListBlock").hide()
        }
    });
    resetListContainer.addEventListener('click', () => {
        olList.reset();
    });
    //    UL LIST
    let countLi = document.getElementById('countLi');
    let listOlSaveBlock = document.getElementById('listOlSaveBlock');
    let markList = document.getElementById('markList');
    createListBtn.addEventListener('click', () => {
        let ol = document.createElement('ol');
        for (let i = 1; i <= countLi.value; i++) {
            let li = document.createElement('li');
            li.innerHTML = `Item ${i}`;
            ol.appendChild(li);
            ol.style.listStyleType = markList.value
        }
        listOlSaveBlock.appendChild(ol);
        editContainer.value = editContainer.value + listOlSaveBlock.innerHTML
    });
    let ulListBlock = document.querySelector('.ulListBlock');
    ulListBtn.addEventListener('click', () => {
        ulListBlock.style.display = 'block';
        $('.greyWrapper').css({
            display: 'block'
        })
    });
    $(document).mouseup(function (e) {
        if ($(".ulListBlock").has(e.target).length === 0) {
            $(".ulListBlock").hide()
        }
    });
    resetListUlContainer.addEventListener('click', () => {
        ulList.reset();
    });
    let countLiUl = document.getElementById('countLiUl');
    let markListUl = document.getElementById('markListUl');
    createUlListBtn.addEventListener('click', () => {
        let ul = document.createElement('ul');
        for (let i = 1; i <= countLiUl.value; i++) {
            let li = document.createElement('li');
            li.innerHTML = `Item ${i}`;
            ul.appendChild(li);
            ul.style.listStyleType = markListUl.value
        }
        listUlSaveBlock.appendChild(ul);
        editContainer.value = editContainer.value + listUlSaveBlock.innerHTML
    })













});