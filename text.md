https://stackoverflow.com/questions/15381198/remove-credentials-from-git

chnaged!


$(function(){
            $.ajaxSetup({
                headers: { 'X-CSRF-TOKEN' : 'giPNjXZkW3597Ret2mjUpANRN61qQPrwlNq0HKu4' }
            });
            $('#SupplierAdd').submit(function(e){
                e.preventDefault();
                var data = $(this).serialize();
                var id = $('#HiddenSupplierID').val();
                var url = 'http://192.168.3.112:8080/AssetManagement/public/asset/save-category';
                console.log(data);
                $.ajax({
                    url: url,
                    method:'POST',
                    data:data,
                    success:function(data){
                        //console.log(data);
                        if(id)
                        {
                            swal({
                                title: "Data Updated Successfully!",
                                icon: "success",
                                button: "Ok!",
                            }).then(function (value) {
                                if(value){
                                    window.location.href = window.location.href.replace(/#.*$/, '');
                                }
                            });
                        }
                        else
                        {
                            swal({
                                title: "Data Inserted Successfully!",
                                icon: "success",
                                button: "Ok!",
                            }).then(function (value) {
                                if(value){
                                    window.location.href = window.location.href.replace(/#.*$/, '');
                                }
                            });
                        }
                        //window.location.href = window.location.href.replace(/#.*$/, '');
                    },
                    error:function(error){
                        console.log(error);
                        swal({
                            title: "Data Not Saved!",
                            text: "Something wend wrong please recheck!",
                            icon: "error",
                            button: "Ok!",
                            className: "myClass",
                        });
                    }
                })

            })
        })

        $("#example1").on("click",
            ".EditSupplier",
            function () {
                var button = $(this);
                var id = button.attr("data-id");
                var url = 'http://192.168.3.112:8080/AssetManagement/public/asset/edit-category';
                //console.log(url);
                $.ajax({
                    url: url,
                    method: 'POST',
                    data:{id: id},
                    success: function (data) {
                        $('input[name=name]').val(data.name);
                        $('input[name=id]').val(data.id);
                        $("#GroupID option[value = '" + data.asset_group_id + "']").attr('selected', 'selected').change();
                        },
                    error: function(error){
                        console.log(error);
                        swal({
                            title: "Data Not Saved!",
                            text: "You clicked the button!",
                            icon: "error",
                            button: "Ok!",
                            className: "myClass",

                        });
                    }
                });
            });






CREATE VIEW view_receive_report AS
SELECT stores.store_name, stores.id AS store_id, buyers.buyer_name, jobs.consigment AS job, styles.style_no, lots.lot AS lot_name,
product_setups.name, product_setups.color, receive_froms.name AS receive_from_name,
receive_masters.challan_no, receive_masters.challan_date, product_categories.name AS product_category, units.full_unit AS full_unit,
receive_details.pkt_roll, receive_details.detail_quantity, receive_details.detail_remarks,
receive_details.created_at, receive_details.updated_at, receive_masters.created_at AS challan_created_at,
receive_masters.updated_at AS challan_updated_at,receive_masters.inserted_by
FROM receive_details
INNER JOIN receive_masters ON receive_details.receive_master_id = receive_masters.id
INNER JOIN stores ON receive_masters.store_id = stores.id
INNER JOIN buyers ON receive_masters.buyer_id = buyers.id
INNER JOIN receive_froms ON receive_masters.receive_from_id = receive_froms.id
INNER JOIN jobs ON receive_details.job_id = jobs.id
INNER JOIN styles ON receive_details.style_id = styles.id
INNER JOIN lots ON receive_details.lot_id = lots.id
INNER JOIN product_setups ON receive_details.product_setup_id = product_setups.id
INNER JOIN product_categories ON receive_details.product_category_id = product_categories.id
INNER JOIN units ON receive_details.unit_id = units.id
WHERE receive_details.status <> 'D' AND receive_masters.status <> 'D'


https://atymic.dev/tips/laravel-8-upserts/


https://www.youtube.com/watch?v=yUGfWAUgQCw