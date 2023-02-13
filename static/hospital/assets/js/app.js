$(document).ready(function () {
    var $wrapper = $('.main-wrapper');
    var $pageWrapper = $('.page-wrapper');
    var $slimScrolls = $('.slimscroll');
    $('.contentPost').removeClass('none');
    $('.contentPost');
    setTimeout(function () {
        $('.contentPost').addClass('none');
    }, 2000);
    var Sidemenu = function () {
        this.$menuItem = $('#sidebar-menu a');
    };

    function init() {
        var $this = Sidemenu;
        $('#sidebar-menu a').on('click', function (e) {
            if ($(this).parent().hasClass('submenu')) {
                e.preventDefault();
            }
            if (!$(this).hasClass('subdrop')) {
                $('.sub-menus', $(this).parents('.sub-menus:first')).slideUp(350);
                $('a', $(this).parents('.sub-menus:first')).removeClass('subdrop');
                $(this).next('.sub-menus').slideDown(350);
                $(this).addClass('subdrop');
            } else if ($(this).hasClass('subdrop')) {
                $(this).removeClass('subdrop');
                $(this).next('.sub-menus').slideUp(350);
            }
        });
        $('#sidebar-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');
    }

    init();
    $('body').append('<div class="sidebar-overlay"></div>');
    $(document).on('click', '#mobile_btn', function () {
        $wrapper.toggleClass('slide-nav');
        $('.sidebar-overlay').toggleClass('opened');
        $('html').addClass('menu-opened');
        $('#task_window').removeClass('opened');
        return false;
    });
    $(".sidebar-overlay").on("click", function () {
        $('html').removeClass('menu-opened');
        $(this).removeClass('opened');
        $wrapper.removeClass('slide-nav');
        $('.sidebar-overlay').removeClass('opened');
        $('#task_window').removeClass('opened');
    });
    $(document).on('click', '#task_chat', function () {
        $('.sidebar-overlay').toggleClass('opened');
        $('#task_window').addClass('opened');
        return false;
    });
    if ($('[data-feather]').length > 0) {
        feather.replace();
    }
    if ($('.select').length > 0) {
        $('.select').select2({minimumResultsForSearch: -1, width: '100%'});
    }
    if ($('.modal').length > 0) {
        var modalUniqueClass = ".modal";
        $('.modal').on('show.bs.modal', function (e) {
            var $element = $(this);
            var $uniques = $(modalUniqueClass + ':visible').not($(this));
            if ($uniques.length) {
                $uniques.modal('hide');
                $uniques.one('hidden.bs.modal', function (e) {
                    $element.modal('show');
                });
                return false;
            }
        });
    }
    if ($('.floating').length > 0) {
        $('.floating').on('focus blur', function (e) {
            $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
        }).trigger('blur');
    }
    if ($slimScrolls.length > 0) {
        $slimScrolls.slimScroll({
            height: 'auto',
            width: '100%',
            position: 'right',
            size: '7px',
            color: '#ccc',
            wheelStep: 10,
            touchScrollStep: 100
        });
        var wHeight = $(window).height() - 60;
        $slimScrolls.height(wHeight);
        $('.sidebar .slimScrollDiv').height(wHeight);
        $(window).resize(function () {
            var rHeight = $(window).height() - 60;
            $slimScrolls.height(rHeight);
            $('.sidebar .slimScrollDiv').height(rHeight);
        });
    }
    var pHeight = $(window).height();
    $pageWrapper.css('min-height', pHeight);
    $(window).resize(function () {
        var prHeight = $(window).height();
        $pageWrapper.css('min-height', prHeight);
    });
    $(window).resize(function () {
        if ($('.page-wrapper').length > 0) {
            var height = $(window).height();
            $(".page-wrapper").css("min-height", height);
        }
    });
    if ($('.datetimepicker').length > 0) {
        $('.datetimepicker').datetimepicker({
            format: 'DD/MM/YYYY',
            icons: {
                up: "fa fa-angle-up",
                down: "fa fa-angle-down",
                next: 'fa fa-angle-right',
                previous: 'fa fa-angle-left'
            }
        });
    }
    $(document).on("click", ".logo-hide-btn", function () {
        $(this).parent().hide();
    });
    if ($('.datatable').length > 0) {
        $('.datatable').DataTable({"bFilter": false,});
    }
    if ($('.datatables').length > 0) {
        $('.datatables').DataTable({"bFilter": true,});
    }
    if ($('[data-bs-toggle="tooltip"]').length > 0) {
        $('[data-bs-toggle="tooltip"]').tooltip();
    }
    if ($('.clickable-row').length > 0) {
        $('.clickable-row').on('click', function () {
            window.location = $(this).data("href");
        });
    }
    if ($('.clickable-row').length > 0) {
        $('.clickable-row').on('click', function () {
            window.location = $(this).data("href");
        });
    }
    $(document).on('click', '#check_all', function () {
        $('.checkmail').click();
        return false;
    });
    if ($('.checkmail').length > 0) {
        $('.checkmail').each(function () {
            $(this).on('click', function () {
                if ($(this).closest('tr').hasClass('checked')) {
                    $(this).closest('tr').removeClass('checked');
                } else {
                    $(this).closest('tr').addClass('checked');
                }
            });
        });
    }
    $(document).on('click', '.mail-important', function () {
        $(this).find('i.fa').toggleClass('fa-star').toggleClass('fa-star-o');
    });
    if ($('.summernote').length > 0) {
        $('.summernote').summernote({height: 200, minHeight: null, maxHeight: null, focus: false});
    }
    if ($('#editor').length > 0) {
        ClassicEditor.create(document.querySelector('#editor'), {
            toolbar: {
                items: ['heading', '|', 'fontfamily', 'fontsize', '|', 'alignment', '|', 'fontColor', 'fontBackgroundColor', '|', 'bold', 'italic', 'strikethrough', 'underline', 'subscript', 'superscript', '|', 'link', '|', 'outdent', 'indent', '|', 'bulletedList', 'numberedList', 'todoList', '|', 'code', 'codeBlock', '|', 'insertTable', '|', 'uploadImage', 'blockQuote', '|', 'undo', 'redo'],
                shouldNotGroupWhenFull: true
            }
        }).then(editor => {
            window.editor = editor;
        }).catch(err => {
            console.error(err.stack);
        });
    }
    $(document).on('click', '#task_complete', function () {
        $(this).toggleClass('task-completed');
        return false;
    });
    if ($('#customleave_select').length > 0) {
        $('#customleave_select').multiselect();
    }
    if ($('#edit_customleave_select').length > 0) {
        $('#edit_customleave_select').multiselect();
    }
    $(document).on('click', '.leave-edit-btn', function () {
        $(this).removeClass('leave-edit-btn').addClass('btn btn-white leave-cancel-btn').text('Cancel');
        $(this).closest("div.leave-right").append('<button class="btn btn-primary leave-save-btn" type="submit">Save</button>');
        $(this).parent().parent().find("input").prop('disabled', false);
        return false;
    });
    $(document).on('click', '.leave-cancel-btn', function () {
        $(this).removeClass('btn btn-white leave-cancel-btn').addClass('leave-edit-btn').text('Edit');
        $(this).closest("div.leave-right").find(".leave-save-btn").remove();
        $(this).parent().parent().find("input").prop('disabled', true);
        return false;
    });
    $(document).on('change', '.leave-box .onoffswitch-checkbox', function () {
        var id = $(this).attr('id').split('_')[1];
        if ($(this).prop("checked") == true) {
            $("#leave_" + id + " .leave-edit-btn").prop('disabled', false);
            $("#leave_" + id + " .leave-action .btn").prop('disabled', false);
        } else {
            $("#leave_" + id + " .leave-action .btn").prop('disabled', true);
            $("#leave_" + id + " .leave-cancel-btn").parent().parent().find("input").prop('disabled', true);
            $("#leave_" + id + " .leave-cancel-btn").closest("div.leave-right").find(".leave-save-btn").remove();
            $("#leave_" + id + " .leave-cancel-btn").removeClass('btn btn-white leave-cancel-btn').addClass('leave-edit-btn').text('Edit');
            $("#leave_" + id + " .leave-edit-btn").prop('disabled', true);
        }
    });
    $('.leave-box .onoffswitch-checkbox').each(function () {
        var id = $(this).attr('id').split('_')[1];
        if ($(this).prop("checked") == true) {
            $("#leave_" + id + " .leave-edit-btn").prop('disabled', false);
            $("#leave_" + id + " .leave-action .btn").prop('disabled', false);
        } else {
            $("#leave_" + id + " .leave-action .btn").prop('disabled', true);
            $("#leave_" + id + " .leave-cancel-btn").parent().parent().find("input").prop('disabled', true);
            $("#leave_" + id + " .leave-cancel-btn").closest("div.leave-right").find(".leave-save-btn").remove();
            $("#leave_" + id + " .leave-cancel-btn").removeClass('btn btn-white leave-cancel-btn').addClass('leave-edit-btn').text('Edit');
            $("#leave_" + id + " .leave-edit-btn").prop('disabled', true);
        }
    });
    if ($('.otp-input, .zipcode-input input, .noborder-input input').length > 0) {
        $('.otp-input, .zipcode-input input, .noborder-input input').focus(function () {
            $(this).data('placeholder', $(this).attr('placeholder')).attr('placeholder', '');
        }).blur(function () {
            $(this).attr('placeholder', $(this).data('placeholder'));
        });
    }
    if ($('.otp-input').length > 0) {
        $(".otp-input").keyup(function (e) {
            if ((e.which >= 48 && e.which <= 57) || (e.which >= 96 && e.which <= 105)) {
                $(e.target).next('.otp-input').focus();
            } else if (e.which == 8) {
                $(e.target).prev('.otp-input').focus();
            }
        });
    }
    $(".links-info-discount").on('click', '.service-trash-one', function () {
        $(this).closest('.links-cont-discount').remove();
        return false;
    });
    $(document).on("click", ".add-links-one", function () {
        var experiencecontent = '<div class="links-cont-discount">' +
            '<div class="service-amount">' +
            '<a href="#" class="service-trash-one"><i class="fa fa-minus-circle me-1"></i>Offer new</a> <span>$ 4 %</span' +
            '</div>' +
            '</div>';
        $(".links-info-discount").append(experiencecontent);
        return false;
    });
    $(document).on("click", ".add-links", function () {
        var experiencecontent = '<div class="links-cont">' +
            '<div class="service-amount">' +
            '<a href="#" class="service-trash"><i class="fe fe-minus-circle me-1"></i>Service Charge</a> <span>$ 4</span' +
            '</div>' +
            '</div>';
        $(".links-info-one").append(experiencecontent);
        return false;
    });
    $(".links-info-discount").on('click', '.service-trash-one', function () {
        $(this).closest('.links-cont-discount').remove();
        return false;
    });
    $(".add-table-items").on('click', '.remove-btn', function () {
        $(this).closest('.add-row').remove();
        return false;
    });
    $(".add-table-items").on('click', '.remove-btn', function () {
        $(this).closest('.add-row').remove();
        return false;
    });
    $(document).on("click", ".add-btns", function () {
        var experiencecontent = '<tr class="add-row">' +
            '<td>' +
            '<input type="text" class="form-control">' +
            '</td>' +
            '<td>' +
            '<input type="text" class="form-control">' +
            '</td>' +
            '<td>' +
            '<input type="text" class="form-control">' +
            '</td>' +
            '<td>' +
            '<input type="text" class="form-control">' +
            '</td>' +
            '<td>' +
            '<input type="text" class="form-control">' +
            '</td>' +
            '<td>' +
            '<input type="text" class="form-control">' +
            '</td>' +
            '<td class="add-remove text-end">' +
            ' <a href="javascript:void(0);" class="add-btns me-2"><i class="fas fa-plus-circle"></i></a> ' +
            ' <a href="#" class="copy-btn me-2"><i class="fas fa-copy"></i></a>' +
            '<a href="javascript:void(0);" class="remove-btn"><i class="fa fa-trash-alt"></i></a>' +
            '</td>' +
            '</tr>';
        $(".add-table-items").append(experiencecontent);
        return false;
    });
    $(document).on('click', '#toggle_btn', function () {
        if ($('body').hasClass('mini-sidebar')) {
            $('body').removeClass('mini-sidebar');
            $('.subdrop + ul').slideDown();
        } else {
            $('body').addClass('mini-sidebar');
            $('.subdrop + ul').slideUp();
        }
        return false;
    });
    $(document).on('mouseover', function (e) {
        e.stopPropagation();
        if ($('body').hasClass('mini-sidebar') && $('#toggle_btn').is(':visible')) {
            var targ = $(e.target).closest('.sidebar').length;
            if (targ) {
                $('body').addClass('expand-menu');
                $('.subdrop + ul').slideDown();
            } else {
                $('body').removeClass('expand-menu');
                $('.subdrop + ul').slideUp();
            }
            return false;
        }
    });
    $(document).on('click', '.top-nav-search .responsive-search', function () {
        $('.top-nav-search').toggleClass('active');
    });
    $(document).on('click', '#file_sidebar_toggle', function () {
        $('.file-wrap').toggleClass('file-sidebar-toggle');
    });
    $(document).on('click', '.file-side-close', function () {
        $('.file-wrap').removeClass('file-sidebar-toggle');
    });
    if ($('.kanban-wrap').length > 0) {
        $(".kanban-wrap").sortable({
            connectWith: ".kanban-wrap",
            handle: ".kanban-box",
            placeholder: "drag-placeholder"
        });
    }
});
$(window).on('load', function () {
    $('#loader').delay(100).fadeOut('slow');
    $('#loader-wrapper').delay(500).fadeOut('slow');
});
var accordion = (function () {
    var $accordion = $('.crms-tasks');
    var $accordion_header = $accordion.find('.js-accordion-header');
    var $accordion_item = $('.js-accordion-item');
    var settings = {speed: 400, oneOpen: false};
    return {
        init: function ($settings) {
            $accordion_header.on('click', function () {
                accordion.toggle($(this));
            });
            $.extend(settings, $settings);
            if (settings.oneOpen && $('.crms-task-item.active').length > 1) {
                $('.crms-task-item.active:not(:first)').removeClass('active');
            }
            $('.crms-task-item.active').find('> .js-accordion-body').show();
        }, toggle: function ($this) {
            if (settings.oneOpen && $this[0] != $this.closest('.crms-tasks').find('> .crms-task-item.active > .js-accordion-header')[0]) {
                $this.closest('.crms-tasks').find('> .crms-task-item').removeClass('active').find('.js-accordion-body').slideUp()
            }
            $this.closest('.crms-task-item').toggleClass('active');
            $this.next().stop().slideToggle(settings.speed);
        }
    }
})();
$(document).ready(function () {
    accordion.init({speed: 300, oneOpen: true});
});
$(function () {
    draggableInit();
    $('.panel-heading').on('click', function () {
        var $panelBody = $(this).parent().children('.panel-body');
        $panelBody.slideToggle();
    });
});
$(document).on("click", ".add-links", function () {
    var experiencecontent = '<div class="links-info"><div class="row form-row links-cont">' +
        '<div class="form-group form-placeholder d-flex">' +
        '<button class="btn social-icon"><i class="feather-github"></i></button>' +
        '<input type="text" class="form-control" placeholder="Social Link">' +
        '<a href="#" class="btn trash">' +
        '<i class="feather-trash-2"></i>' +
        '</a>' +
        '</div>' +
        '</div>' +
        '</div>';
    $(".settings-form").append(experiencecontent);
    return false;
});
$(".settings-form").on('click', '.trash', function () {
    $(this).closest('.links-cont').remove();
    return false;
});
$(document).on("click", ".add-links1", function () {
    var experiencecontent = '<div class="links-cont">' +
        '<div class="service-amount">' +
        '<a href="#" class="service-trash1"><i class="fa fa-minus-circle me-1"></i>Service Charge</a> <span>$ 4</span' +
        '</div>' +
        '</div>';
    $(".links-info-one").append(experiencecontent);
    return false;
});
$(".links-info-one").on('click', '.service-trash1', function () {
    $(this).closest('.links-cont').remove();
    return false;
});
$(".links-info-discount").on('click', '.service-trash-one', function () {
    $(this).closest('.links-cont-discount').remove();
    return false;
});
$(".add-table-items").on('click', '.remove-btn', function () {
    $(this).closest('.add-row').remove();
    return false;
});
$(document).on("click", ".add-btn", function () {
    var experiencecontent = '<tr class="add-row">' +
        '<td>' +
        '<input type="text" class="form-control">' +
        '</td>' +
        '<td>' +
        '<input type="text" class="form-control">' +
        '</td>' +
        '<td>' +
        '<input type="text" class="form-control">' +
        '</td>' +
        '<td>' +
        '<input type="text" class="form-control">' +
        '</td>' +
        '<td>' +
        '<input type="text" class="form-control">' +
        '</td>' +
        '<td>' +
        '<input type="text" class="form-control">' +
        '</td>' +
        '<td class="add-remove text-end">' +
        '<a href="javascript:void(0);" class="add-btn me-2"><i class="fas fa-plus-circle"></i></a> ' +
        '<a href="#" class="copy-btn me-2"><i class="fe fe-copy"></i></a>' +
        '<a href="javascript:void(0);" class="remove-btn"><i class="fe fe-trash-2"></i></a>' +
        '</td>' +
        '</tr>';
    $(".add-table-items").append(experiencecontent);
    return false;
});
$('.app-listing .selectBox').on("click", function () {
    $(this).parent().find('#checkBoxes').fadeToggle();
    $(this).parent().parent().siblings().find('#checkBoxes').fadeOut();
});
$('.invoices-main-form .selectBox').on("click", function () {
    $(this).parent().find('#checkBoxes-one').fadeToggle();
    $(this).parent().parent().siblings().find('#checkBoxes-one').fadeOut();
});
if ($('.SortBy').length > 0) {
    var show = true;
    var checkbox1 = document.getElementById("checkBox");
    $('.selectBoxes').on("click", function () {
        if (show) {
            checkbox1.style.display = "block";
            show = false;
        } else {
            checkbox1.style.display = "none";
            show = true;
        }
    });
}
$(function () {
    $("input[name='invoice']").click(function () {
        if ($("#chkYes").is(":checked")) {
            $("#show-invoices").show();
        } else {
            $("#show-invoices").hide();
        }
    });
});
if ($('.themecls').length > 0) {
    const toggleSwitch = document.querySelector('.theme-changes span');
    const currentTheme = localStorage.getItem('theme');
    var app = document.getElementsByClassName("themecls")[0];
    if (currentTheme) {
        app.href = "assets/css/" + currentTheme + ".css";
    }

    function toggleTheme(e) {
        app.href = "assets/css/" + e + ".css";
        localStorage.setItem('theme', e);
    }
}
$(document).ready(function () {
    document.getElementsByClassName("main-wrapper")[0].style.visibility = "visible";
});

function draggableInit() {
    var sourceId;
    $('[draggable=true]').bind('dragstart', function (event) {
        sourceId = $(this).parent().attr('id');
        event.originalEvent.dataTransfer.setData("text/plain", event.target.getAttribute('id'));
    });
    $('.panel-body').bind('dragover', function (event) {
        event.preventDefault();
    });
    $('.panel-body').bind('drop', function (event) {
        var children = $(this).children();
        var targetId = children.attr('id');
        if (sourceId != targetId) {
            var elementId = event.originalEvent.dataTransfer.getData("text/plain");
            $('#processing-modal').modal('toggle');
            setTimeout(function () {
                var element = document.getElementById(elementId);
                children.prepend(element);
                $('#processing-modal').modal('toggle');
            }, 1000);
        }
        event.preventDefault();
    });
    if ($('.popover-list').length > 0) {
        var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl)
        })
    }
    if ($('.counter').length > 0) {
        $('.counter').counterUp({delay: 20, time: 2000});
    }
    if ($('#timer-countdown').length > 0) {
        $('#timer-countdown').countdown({
            from: 180,
            to: 0,
            movingUnit: 1000,
            timerEnd: undefined,
            outputPattern: '$day Day $hour : $minute : $second',
            autostart: true
        });
    }
    if ($('#timer-countup').length > 0) {
        $('#timer-countup').countdown({from: 0, to: 180});
    }
    if ($('#timer-countinbetween').length > 0) {
        $('#timer-countinbetween').countdown({from: 30, to: 20});
    }
    if ($('#timer-countercallback').length > 0) {
        $('#timer-countercallback').countdown({
            from: 10, to: 0, timerEnd: function () {
                this.css({'text-decoration': 'line-through'}).animate({'opacity': .5}, 500);
            }
        });
    }
    if ($('#timer-outputpattern').length > 0) {
        $('#timer-outputpattern').countdown({
            outputPattern: '$day Days $hour Hour $minute Min $second Sec..',
            from: 60 * 60 * 24 * 3
        });
    }
}