// Author: Matt Pennington


const contacts = [];
const createContact = ( contact ) => {
  const $contactContainer = $( '#contact-list-container' );
  contact.id = contacts.length;
  contacts.push( contact );
  const button = '<button class="contact-button" id="dial-' + contact.id + '">Call</button>';
  const tr = '<tr><td><img src="' + contact.imgsrc + '" alt="' + contact.imgalt + '"/></td><td>' + contact.name + '</td><td>' + contact.phone + '</td><td>' + contact.email + '</td><td>' + button + '</td></tr>';
  $contactContainer.append( tr );
  $( '#dial-' + contact.id ).click( () => {
  	$( '#dialer-nav' ).click();
  	$( 'input[name=dialer-textbox]' ).val( contact.phone  );
  } ); 
};

$( document ).ready( () => {
	const tabNames = [ 'dialer', 'contact-list', 'add-contact', 'help' ];
	for ( let tabName of tabNames ) {
		$( '#' + tabName + '-nav' ).click( () => {
			$( '.content' ).hide();
			$( '#' + tabName ).show();
		} );
	}

	const standardContacts = [
		{
			name: "Jean-luc Picard",
			phone: "123-456-7890",
			email: "warpdrive@enterprise.com",
			imgsrc: "https://upload.wikimedia.org/wikipedia/en/thumb/2/20/Captain_Picard_Chair.jpg/220px-Captain_Picard_Chair.jpg",
			imgalt: "Portrait of Jean-luc Picard"
		},
		{
			name: "Luke Skywalker",
			phone: "555-123-4321",
			email: "light@saber.com",
			imgsrc: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/5dd2b41a-a9ab-43fd-ac7d-808fa27d2058/db2x9mf-15b30244-4a74-471c-b1c9-9995eb55640c.jpg",
			imgalt: "Portrait of Luke Skywalker"
		},
		{
			name: "Easter Bunny",
			phone: "314-159-2653",
			email: "bunnies@lay.eggs.too",
			imgsrc: "https://pbs.twimg.com/profile_images/617680537444970496/t-TG1dzW_400x400.jpg",
			imgalt: "Photo of easter eggs",
		}
	];
	for ( let contact of standardContacts ) {
		createContact( contact );
	}

	$( '#add-contact-form' ).submit( ( event ) =>{
		$('.error').removeClass('error');
		if ( !!$('input[name=name-input]').val() && !!$('input[name=phone-input]').val() && !!$('input[name=email-input]').val() && !!$('input[name=imgsrc-input]').val() && !!$('input[name=imgalt-input]').val() ) {
			createContact({
				name: $('input[name=name-input]').val(),
				phone: $('input[name=phone-input]').val(),
				email: $('input[name=email-input]').val(),
				imgsrc: $('input[name=imgsrc-input]').val(),
				imgalt: $('input[name=imgalt-input]').val()  
			} );
			$( '#contact-list-nav' ).click()
		}
		else {
			if ( !$('input[name=name-input]').val() ) {
				$('input[name=name-input]').addClass( 'error' );
			}
			if ( !$('input[name=phone-input]').val() ) {
				$('input[name=phone-input]').addClass( 'error' );
			}
			if ( !$('input[name=email-input]').val() ) {
				$('input[name=email-input]').addClass( 'error' );
			}
			if ( !$('input[name=imgsrc-input]').val() ) {
				$('input[name=imgsrc-input]').addClass( 'error' );
			}
			if ( !$('input[name=imgalt-input]').val() ) {
				$('input[name=imgalt-input]').addClass( 'error' );
			}
		}

		// Prevent reload since no server is present
		return false;
	} );

	$( '#clear-add-contact-form-button' ).click( ( event ) => {
		event.preventDefault();
		$('.error').removeClass('error');
		$('input[name=name-input]').val( '' )
		$('input[name=phone-input]').val( '' )
		$('input[name=email-input]').val( '' )
		$('input[name=imgsrc-input]').val( '' )
		$('input[name=imgalt-input]').val( '' )
	} );

	$( '.dialer-pad-button' ).click( ( event ) => {
		const originalVal = $( 'input[name=dialer-textbox]' ).val();
		$( 'input[name=dialer-textbox]' ).val( originalVal + '' + event.target.id );
	} );

	$( '#clear-dialer-button' ).click( () => {
		$('.error').removeClass('error');
		$( 'input[name=dialer-textbox]' ).val( '' );
	} );

	$( '#dial-button' ).click( () => {
		$('.error').removeClass('error');
		if ( !$( 'input[name=dialer-textbox]' ).val() ) {
			$( 'input[name=dialer-textbox]' ).addClass( 'error' );
		}
		else {
			alert( 'Dialing ' + $( 'input[name=dialer-textbox]' ).val() );
		}
	} );
} );


