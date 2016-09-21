$(document).ready(
		function() {

			$.getJSON('data.json', function(data) {
				$.each(data, function(key, val) {
					$('#news').append(
							'<div class="newsItem"><div class="newsItemHeader">'
									+ val['title']
									+ '</div><div class="newsItemContent">'
									+ val['teaser'] + '</div></div>');
				});
			});
		});