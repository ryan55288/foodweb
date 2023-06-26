    //事件
    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip()

        //編輯modal 事件
        $('#edit').on('show.bs.modal', function (event) {
            var btn = $(event.relatedTarget);
            var title = btn.data('title');
            var modal = $(this);
            modal.find('.modal-title').text(title);
        })
        //移除事件
        $('#remove').on('show.bs.modal', function (event) {
            var btn = $(event.relatedTarget);
            var title = btn.data('title');
            var modal = $(this);
            modal.find('.modal-title').text('確定要刪除' + title + '?');
        })
        //儲存成功事件
        $('#saveOk').on('show.bs.modal', function (event) {
            var btn = $(event.relatedTarget);
            var title = btn.data('儲存成功');
            var modal = $(this);
            modal.find('.modal-title').text(title);
        })
        //下載事件
        $('#DownLoadOk').on('show.bs.modal', function (event) {
            var btn = $(event.relatedTarget);
            var title = btn.data('下載成功');
            var modal = $(this);
            modal.find('.modal-title').text(title);
        })
    });
    // 設定圖型/////////////////////////////////////////////////////////////
    window.chartColors = {
        red: 'rgb(255, 99, 132)',
        blue: 'rgb(54, 162, 235)',
        yellow: 'rgba(255, 205, 86, 0.2)',
    };

    var randomScalingFactor = function () {
        return Math.round(Math.random() * 100);
    };

    var config = {
        type: 'pie',
        data: {
            datasets: [{
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                ],
                backgroundColor: [
                    window.chartColors.red,
                    window.chartColors.blue,
                    window.chartColors.yellow,
                ],
                label: 'Dataset 1'
            }],
            labels: [
                "網頁",
                "APP",
            ]
        },
        options: {
            responsive: true
        }
    };


    // 設定長條圖
    var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
        "November", "December"
    ];
    var colors = Chart.helpers.color;
    var barChartData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: '蝦皮拍賣',
            backgroundColor: colors(window.chartColors.blue).alpha(0.5).rgbString(),
            borderColor: window.chartColors.blue,
            borderWidth: 1,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ]
        }, {
            label: 'yahoo拍賣',
            backgroundColor: colors(window.chartColors.red).alpha(0.5).rgbString(),
            borderColor: window.chartColors.red,
            borderWidth: 1,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ]
        }, {
            label: '露天拍賣',
            backgroundColor: colors(window.chartColors.yellow).alpha(0.5).rgbString(),
            borderColor: window.chartColors.white,
            borderWidth: 1,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ]
        }]

    };

    window.onload = function () {
        // pie
        document.querySelectorAll('.chart-item').forEach(function (item) {
            config.data.datasets.forEach(function (dataset) {
                dataset.data = dataset.data.map(function () {
                    return randomScalingFactor();
                });
            });
            var ctx = item.getContext("2d");
            window.myPie = new Chart(ctx, config);
        })


        // bar
        var barCtx = document.getElementById("barCanvas").getContext("2d");
        window.myBar = new Chart(barCtx, {
            type: 'bar',
            data: barChartData,
            options: {
                responsive: true,
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: '用戶來源成長性比例'
                }
            }
        });

    };