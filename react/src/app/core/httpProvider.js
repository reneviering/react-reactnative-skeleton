import $ from 'jquery';

const get = (url, isCors) => {
	return new Promise((resolve, reject) => {
		const ajax = $.ajax({
			type: "GET",
			url: url,
			crossDomain: isCors,
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			success: function (data) {
				resolve(data);
			},
			error: function (errMsg) {
				ajax.abort();
				reject(errMsg);
			}
		});
	});
};

const post = (url, data, isCors) => {
	return new Promise((resolve, reject) => {
		const ajax = $.ajax({
			type: "POST",
			url: url,
			crossDomain: isCors,
			data: JSON.stringify(data),
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			success: function (data) {
				resolve(data);
			},
			error: function (errMsg) {
				ajax.abort();
				reject(errMsg);
			}
		});
	});
};

export const http = {
	get,
	post
};
