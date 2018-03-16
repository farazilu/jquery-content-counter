$.fn.extend({content_count_set : function() {
	// console.log(' function called');
	return this.each(function() {
		this.custome_counter = $(this).data('custome_counter');
		if (!this.custome_counter) {
			var length = $(this).val().length;
			
			this.min = $(this).data('min');
			this.max = $(this).data('max');
			
			if (this.min == undefined) {
				this.min = 0;
			}
			if (this.max == undefined) {
				this.max = 0;
			}
			
			var content = $(
					'<div class="dynamic_counter"> <div class="min"> <strong>' + i18next.t('meta_tags_counter_min_label') + '</strong> ' + this.min + '</div> <div class="max"><strong>' + i18next.t('meta_tags_counter_max_label') + '</strong> '
							+ this.max + '</div> <div class="count"><strong> ' + i18next.t('meta_tags_counter_char_count_label') + '</strong> <span class="count_div">' + length + ' </span> </div> <div class="seo-label"></div>  </div>').insertAfter(
					this);
			
			this.counter = $(content).find('.count_div');
			this.seolabel = $(content).find('.seo-label');
			
			if (length >= this.min && length <= this.max) {
				$(this.counter).css("color", 'green');
				$(this.seolabel).html(i18next.t('meta_tags_counter_char_success_label'));
			} else if (length > this.max) {
				$(this.counter).css("color", 'red');
				$(this.seolabel).html(i18next.t('meta_tags_counter_char_error2_label'));
			} else {
				$(this.counter).css("color", 'red');
				$(this.seolabel).html(i18next.t('meta_tags_counter_char_error1_label'));
			}
			$(this).data('custome_counter', true);
			
			$(this).keyup(function() {
				// console.log(this.counter);
				var length = $(this).val().length;
				if (length >= this.min && length <= this.max) {
					$(this.counter).css("color", 'green');
					$(this.seolabel).html(i18next.t('meta_tags_counter_char_success_label'));
				} else if (length > this.max) {
					$(this.counter).css("color", 'red');
					$(this.seolabel).html(i18next.t('meta_tags_counter_char_error2_label'));
				} else {
					$(this.counter).css("color", 'red');
					$(this.seolabel).html(i18next.t('meta_tags_counter_char_error1_label'));
				}
				$(this.counter).html(length);
			});
		}
	});
}});
