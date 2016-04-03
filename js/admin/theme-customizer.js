/**
 * This file adds some LIVE to the Theme Customizer live preview.
 */
( function( $ ) {	

	var

	updateAccentColour = function(value) {
		$("a:not(#site-footer a, .account-links a, .social a), .menu-button, .button-alt.accent, .button-secondary.accent, .button.button-alt.accent, .button.button-secondary.accent, .block-title, .site-title a, .post-title a, .entry-header .entry-title a, .bypostauthor .post-author i, body.author .author-activity-summary .number, body.author .author-activity-feed .activity-summary .display-name, body.author .author-activity-feed .activity-summary a, .widget.widget_charitable_edd_campaign_downloads .download-price, .widget.widget_charitable_donate_widget .charitable-submit-field .button, .campaign .campaign-stats li span, .campaigns-grid .campaign-stats li span, .charitable-donation-form .charitable-form-field .button, body.user-dashboard .charitable-submit-field .button.button-primary, .user-dashboard-menu li.current-menu-item a, .user-dashboard-menu li a, .charitable-fieldset .charitable-form-header, .entry-header .entry-title, .user-post-actions a, body .edd-submit.button.gray, body .edd-submit.button.white, body .edd-submit.button.blue, body .edd-submit.button.red, body .edd-submit.button.orange, body .edd-submit.button.green, body .edd-submit.button.yellow, body .edd-submit.button.dark-gray, .widget.widget_pp_campaign_events .download-price").css("color", value);
        $(".button-alt.accent, .button-secondary.accent, .button.button-alt.accent, .button.button-secondary.accent, .feature-block, .account-links .button.button-alt, .banner, .sticky, .widget.widget_charitable_donate_widget .charitable-submit-field .button, .widget.widget_charitable_donate_widget .charitable-submit-field .button:focus, .charitable-donation-form .charitable-form-field .button, .charitable-donation-form .charitable-form-field .button:focus, .charitable-donation-form .charitable-form-field .button:active, body.user-dashboard .charitable-submit-field .button.button-primary, body .edd-submit.button.gray:focus, body .edd-submit.button.gray:active, body .edd-submit.button.gray, body .edd-submit.button.white:focus, body .edd-submit.button.white:active, body .edd-submit.button.white, body .edd-submit.button.blue:focus, body .edd-submit.button.blue:active, body .edd-submit.button.blue, body .edd-submit.button.red:focus, body .edd-submit.button.red:active, body .edd-submit.button.red, body .edd-submit.button.orange:focus, body .edd-submit.button.orange:active, body .edd-submit.button.orange, body .edd-submit.button.green:focus, body .edd-submit.button.green:active, body .edd-submit.button.green, body .edd-submit.button.yellow:focus, body .edd-submit.button.yellow:active, body .edd-submit.button.yellow, body .edd-submit.button.dark-gray:focus, body .edd-submit.button.dark-gray:active, body .edd-submit.button.dark-gray, #edd_checkout_wrap #edd-purchase-button").css("background-color", value);
        $(".toggled .menu-site > ul, .button-alt.accent, .button-secondary.accent, .button.button-alt.accent, .button.button-secondary.accent, .account-links .button.button-alt, .widget.widget_charitable_donate_widget .charitable-submit-field .button, .charitable-donation-form .charitable-form-field .button, body.user-dashboard .charitable-submit-field .button.button-primary, body .edd-submit.button.gray, body .edd-submit.button.white, body .edd-submit.button.blue, body .edd-submit.button.red, body .edd-submit.button.orange, body .edd-submit.button.green, body .edd-submit.button.yellow, body .edd-submit.button.dark-gray, body .edd-submit.button.gray:focus, body .edd-submit.button.gray:active, body .edd-submit.button.gray, body .edd-submit.button.white:focus, body .edd-submit.button.white:active, body .edd-submit.button.white, body .edd-submit.button.blue:focus, body .edd-submit.button.blue:active, body .edd-submit.button.blue, body .edd-submit.button.red:focus, body .edd-submit.button.red:active, body .edd-submit.button.red, body .edd-submit.button.orange:focus, body .edd-submit.button.orange:active, body .edd-submit.button.orange, body .edd-submit.button.green:focus, body .edd-submit.button.green:active, body .edd-submit.button.green, body .edd-submit.button.yellow:focus, body .edd-submit.button.yellow:active, body .edd-submit.button.yellow, body .edd-submit.button.dark-gray:focus, body .edd-submit.button.dark-gray:active, body .edd-submit.button.dark-gray").css("border-color", value);
        $("toggled .menu-site").css("border-top-color", value);
	},

	updateBackgroundColour = function(value) {
		$("body, #custom-donation-amount-field.charitable-custom-donation-field-alone").css("background-color", value);
        $(".donation-amounts .donation-amount").css("border-color", value);
	}, 

	updateTextColour = function(value) {
		$("body, button,input[type='button'],input[type='reset'],input[type='submit'], .menu-site a, .button, .button-alt,.button-secondary,.button.button-alt,.button.button-secondary, .modal .block-title, .meta a, #submit, .widget.widget_campaign_creator_widget .creator-profile-link a, .campaigns-grid .campaign-description, .campaigns-grid .campaign-stats, .charitable-donation-form .charitable-form-field .button, .donation-amounts .donation-amount, #custom-donation-amount-field.charitable-custom-donation-field-alone input, body.user-dashboard .charitable-submit-field .button, .charitable-form-field-editor .mce-btn button, .charitable-repeatable-form-field-table .add-row.button, .share-widget .modal,.share-widget .modal .block-title, .user-post-actions a, div.printfriendly a,div.printfriendly a:link, div.printfriendly a:visited, body.events-single .tribe-events-tickets .tickets_price, body.events-single .tribe-events-tickets .tickets_name, #tribe-events .tribe-events-button").css("color", value);
        $("button,input[type='button'],input[type='reset'],input[type='submit'], .button, .button-alt,.button-secondary,.button.button-alt,.button.button-secondary, .sticky .entry .more-link, .sticky .entry .more-link:focus, .sticky .entry .more-link:active, #submit, .widget.widget_campaign_creator_widget .creator-profile-link a, .charitable-donation-form .charitable-form-field .button, .donation-amounts .donation-amount.selected, .donation-amounts .donation-amount, body.user-dashboard .charitable-submit-field .button, #tribe-events .tribe-events-button").css("background-color", value);
        $("button,input[type='button'],input[type='reset'],input[type='submit'], button,input[type='button'],input[type='reset'],input[type='submit'], .button, .button, .button-alt,.button-secondary,.button.button-alt,.button.button-secondary, .sticky .entry .more-link, .sticky .entry .more-link:focus, .sticky .entry .more-link:active, #submit, .widget.widget_campaign_creator_widget .creator-profile-link a, .widget.widget_campaign_creator_widget .creator-profile-link a, .charitable-donation-form .charitable-form-field .button, .donation-amounts .donation-amount.selected, .donation-amounts .donation-amount, body.user-dashboard .charitable-submit-field .button, .charitable-repeatable-form-field-table .add-row.button, #tribe-events .tribe-events-button").css("border-color", value);        
	},

	updateHeaderTextColour = function(value) {
		$(".social a, .account-links a, .account-links .button.button-alt").css("color", value);
	},

	updateFooterTextColour = function(value) {
		$("#site-footer, #site-footer a").css("color", value);
	},

	updateBodyBackground = function(value) {
		$('body').css('background-image', 'url(' + value + ')');
	}, 

	updateCampaignFeatureBackground = function(value) {
		$('.feature-block').css('background-image', 'url(' + value + ')');
	}, 

	updateBannerBackground = function(value) {
		$('.banner').css('background-image', 'url(' + value + ')');
	}, 

	updateSocial = function(value, network) {
		var $el = $('.social .'+network);

		// If this button isn't in there yet, create it now
		if ($el.length === 0 && value.length > 0) {
			$('.social').append('<li><a class="'+network+'" href="'+value+'"><i class="icon-'+network+'"></i></a></li>');
		}
		// Update the link
		else if ($el.length > 0 && value.length > 0) {
			$el.find('a').attr('href', value);
		} 
		// Remove the link
		else {
			$el.remove();
		}
	};

	// Update the site title in real time...
	wp.customize( 'blogname', function( value ) {
		value.bind( function( newval ) {
			$( '.site-title a' ).html( newval );
		} );
	} );
	
	// Update the site description in real time...
	wp.customize( 'blogdescription', function( value ) {
		value.bind( function( newval ) {
			$( '.site-tagline' ).html( newval );
		} );
	} );

	// Update the logo in real time...
	wp.customize( 'logo_url', function( value ) {		
		value.bind( function( newval ) {			

			// Get the image dimensions
			var img = new Image();
			img.src = newval;
			img.onload = function() {
				if ( newval.length > 0 ) {
					$('.site-identity').css( {
						'background' : 'url('+newval+') no-repeat left 50%', 
						'padding-left' : img.width + 10, 
						'min-height' : img.height
					} );
				}
				else {
					$('.site-identity').css( {
						'background-image' : 'none',
						'padding-left' : 0,
						'min-height' : 0
					} );
				}
			}			
		} ); 
	} );

	// Hide the site title
	wp.customize( 'hide_site_title', function( value ) {
		value.bind( function( newval ) {
			$( '.site-title' ).toggleClass('hidden', newval);
		} );
	} );

	// Hide the site description
	wp.customize( 'hide_site_tagline', function( value ) {
		value.bind( function( newval ) {
			$( '.site-tagline' ).toggleClass('hidden', newval);
		} );
	} );

	// Update the footer tagline
	wp.customize( 'footer_tagline', function( value ) {
		value.bind( function( newval ) {
			console.log( newval );
			console.log( $( '.footer-notice' ) );
			$( '.footer-notice' ).html( newval );
		} );
	} )

	//  Update colours
	wp.customize( 'accent_colour', function( value ) {
		value.bind( function( newval ) {			
			updateAccentColour( newval );			
		} );
	} );	
	wp.customize( 'background_colour', function( value ) {
		value.bind( function( newval ) {
			updateBackgroundColour( newval );
		});
	} );
	wp.customize( 'text_colour', function( value ) {
		value.bind( function( newval ) {
			updateTextColour( newval );
		});
	} );
	wp.customize( 'header_text_colour', function( value ) {
		value.bind( function( newval ) {
			updateHeaderTextColour( newval );
		});
	} );
	wp.customize( 'footer_text_colour', function( value ) {
		value.bind( function( newval ) {
			updateFooterTextColour( newval );
		});
	} );	

	// Textures
	wp.customize( 'body_background', function( value ) {
		value.bind( function( newval ) {
			updateBodyBackground( newval );
		});
	} );
	wp.customize( 'campaign_feature_background', function( value ) {
		value.bind( function( newval ) {
			updateCampaignFeatureBackground( newval );
		});
	} );
	wp.customize( 'blog_banner_background', function( value ) {
		value.bind( function( newval ) {
			updateBannerBackground( newval );
		});
	} );

	// Social networks
	wp.customize( 'facebook', function( value ) {
		value.bind( function( newval ) {
			updateSocial( newval, 'facebook' );
		});
	});
	wp.customize( 'flickr', function( value ) {
		value.bind( function( newval ) {
			updateSocial( newval, 'flickr' );
		});
	});
	wp.customize( 'foursquare', function( value ) {
		value.bind( function( newval ) {
			updateSocial( newval, 'foursquare' );
		});
	});
	wp.customize( 'google-plus', function( value ) {
		value.bind( function( newval ) {
			updateSocial( newval, 'google-plus' );
		});
	});
	wp.customize( 'instagram', function( value ) {
		value.bind( function( newval ) {
			updateSocial( newval, 'instagram' );
		});
	});
	wp.customize( 'linkedin', function( value ) {
		value.bind( function( newval ) {
			updateSocial( newval, 'linked' );
		});
	});
	wp.customize( 'pinterest', function( value ) {
		value.bind( function( newval ) {
			updateSocial( newval, 'pinterest' );
		});
	});
	wp.customize( 'renren', function( value ) {
		value.bind( function( newval ) {
			updateSocial( newval, 'renren' );
		});
	});
	wp.customize( 'skype', function( value ) {
		value.bind( function( newval ) {
			updateSocial( newval, 'skype' );
		});
	});
	wp.customize( 'tumblr', function( value ) {
		value.bind( function( newval ) {
			updateSocial( newval, 'tumblr' );
		});
	});
	wp.customize( 'twitter', function( value ) {
		value.bind( function( newval ) {
			updateSocial( newval, 'twitter' );
		});
	});
	wp.customize( 'vk', function( value ) {
		value.bind( function( newval ) {
			updateSocial( newval, 'vk' );
		});
	});
	wp.customize( 'weibo', function( value ) {
		value.bind( function( newval ) {
			updateSocial( newval, 'weibo' );
		});
	});
	wp.customize( 'windows', function( value ) {
		value.bind( function( newval ) {
			updateSocial( newval, 'windows' );
		});
	});
	wp.customize( 'xing', function( value ) {
		value.bind( function( newval ) {
			updateSocial( newval, 'xing' );
		});
	});
	wp.customize( 'youtube', function( value ) {
		value.bind( function( newval ) {
			updateSocial( newval, 'youtube' );
		});
	});

} )( jQuery ); 