function postNewInfo(){
		if($('#password').val() ==$('#cpassword').val())
		{$.ajax({
		type: "POST",
		url: "https://smartparkproject.tk/api/account/register",
		dataType: "json",
		contentType:"application/json; charset=utf-8",
		data: JSON.stringify({username: $('#email').val(), password: $('#password').val()}),
		success: function (data) {
			console.log(data);
			window.location.replace("/accountman");
			$.ajax({
			type: "POST",
			url: "https://smartparkproject.tk/api/account/login",
			dataType: "json",
			contentType:"application/json; charset=utf-8",
			data: JSON.stringify({username: $('#email').val(), password: $('#password').val()}),
		success: function (data) {
			console.log(data);
			document.cookie = "token="+data.result;
				}
			});
		},
		error: function (data) {
		$("#failureModal").modal('show');
		}
	});}
		else
		{
			$('#badpassmodal').modal('show');
		}
		
}
