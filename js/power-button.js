+function ($) {
	
	var PowerButton = function (element, options)
	{
		var $button = $(element);
		this.options = $.extend(true, {}, $.fn.powerbutton.defaults, options);
		
		$button.addClass('power-button');
		
		if ($button.is('button')) {
			$button
				.html(this.options.html)
				.removeClass('btn-default btn-primary btn-success btn-info btn-warning btn-danger btn-link')
				.addClass(this.options.icon)
				.prop('type', this.options.type);
			$button.disabled = this.options.disabled;
		}

		if(typeof this.options.callback === "function") {
			this.options.callback();
		}
		
		return this;
	};


	$.fn.powerbutton = function (options = {}) {
		return new PowerButton(this, options);
	};
	
	$.fn.powerbutton.defaults = {
		html: '',
		icon: '',
		type: 'button',
		disabled: false, 
		callback: function() {}
	};
	
	$.fn.powerLoadingButton = function(text = '', callback = function() {})
	{
		return new PowerButton(this, {
			html: '<span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> ' + text,
			icon: 'btn-warning',
			type: 'button',
			disabled: true,
			callback
		});
	};
	
	$.fn.powerSubmitButton = function(text = '', callback = function() {})
	{
		return new PowerButton(this, {
			html: text,
			icon: 'btn-primary',
			type: 'submit',
			disabled: false,
			callback
		});
	};
	
	$.fn.powerSuccessButton = function(text = '', callback = function() {})
	{
		return new PowerButton(this, {
			html: '<span class="glyphicon glyphicon-ok"></span>' + text,
			icon: 'btn-success',
			type: 'button',
			disabled: true,
			callback
		});
	};

}(jQuery);