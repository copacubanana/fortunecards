 //see sliceNdice.scripts.js for func info

//all possible faces
var cardDeck = ['hearts', 'diamonds', 'spades', 'clubs'];

//from each array card drawn will be taken out
var heartArr = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
var diamondArr = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
var spadeArr = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
var clubArr = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

var str = "";  //output for switch of pickFace(pos);
var s;    //output for pickNum(pack);

var cardscontainer = document.getElementById('cardscontainer');	// parent element

/* ======== pickNum() assigns a randomly generated image to each card ========== */ 

function pickNum(pack) {
    var i = Math.floor(Math.random() * (pack.length));
    s = pack[i];
    pack.splice(i,1);
    return s;
}

/* ======== adds Event Listener to .cardscontainer ========== */ 

cardscontainer.addEventListener('click', function(e) { 
		pickFace(e);
	}, false);

/* ======== click on a card and reveal a random card ========== */ 

function getTarget(e) {
	return e.target;
}

function pickFace(e) {
	var target = getTarget(e); // card 
	var targetCardNum = target.firstElementChild; // card number
	var test = document.getElementById('test');
	if (target.className == 'draw') {
		var ii = Math.round(Math.random() * 3);
		var suite = cardDeck[ii];
		var cardNum = '';
		var imgSymbol = '';
		var meaning = '';
		var targetId = target.id;
		var elTargetId = document.getElementById(target.id + 'Explain');
			switch(suite) {
				case 'diamonds':
					cardNum = pickNum(diamondArr);
					imgSymbol = "url(images/cardsymbolssprite.gif) 0px 0px";
					targetCardNum.style.color = 'darkred';
					meaning = displayCardMeaning('diamonds', cardNum);
					elTargetId.innerHTML = meaning;
					break;
				case 'hearts':
					cardNum = pickNum(heartArr);
					imgSymbol = "url(images/cardsymbolssprite.gif) 360px 0px";
					targetCardNum.style.color = 'darkred';
					meaning = displayCardMeaning('hearts', cardNum);
					elTargetId.innerHTML = meaning;
					break;
				case 'spades':
					cardNum = pickNum(spadeArr);
					imgSymbol = "url(images/cardsymbolssprite.gif) 241px 0px";
					targetCardNum.style.color = 'black';
					meaning = displayCardMeaning('spades', cardNum);
					elTargetId.innerHTML = meaning;
					break;
				case 'clubs':
					cardNum = pickNum(clubArr);
					imgSymbol = "url(images/cardsymbolssprite.gif) 120px 0px";
					targetCardNum.style.color = 'black';
					meaning = displayCardMeaning('clubs', cardNum);
					elTargetId.innerHTML = meaning;
					break;
			}   
	targetCardNum.style.visibility = 'visible';
	targetCardNum.textContent = cardNum;			 
	target.style.background = imgSymbol;

	if (target.className == 'draw') { // prevents card from being clicked again
		target.className = 'drawn';
	}
	}
}

/* ======== explanation of each card ========== */ 

function displayCardMeaning(suite, num) {
var message = '';
	if (suite == 'diamonds') {
		switch(num) {
			case 'A': 
				message = 'A ring or present of jewellery. News about money. A letter.';
				break;
			case '2': 
				message = 'A love affair attracting disapproval from others. A business' 
					+ ' partnership.';
				break;
			case '3': 
				message = 'Legal problems, domestic arguments. A legal letter.';
				break;
			case '4': 
				message = 'An inheritance. Improvements in finances.';
				break;
			case '5': 
				message = 'Success in business. Happy family.';
				break;
			case '6': 
				message = 'Problems in a second marriage.';
				break;
			case '7': 
				message = 'Surprise news or a gift. Problems and losses at work.';
				break;
			case '8': 
				message = 'A marriage and travel late in life. Financial ups and downs.';
				break;
			case '9': 
				message = 'Surprise with money. New business opportunities. Restlessness.';
				break;
			case '10': 
				message = 'Money and travel highlighted. Fortunate changes.';
				break;
			case 'J': 
				message = 'A relative. A very fair-haired youth. Watch out for dishonesty'
					+ ' or unreliability.';
				break;
			case 'Q': 
				message = 'A woman who loves to party and to gossip. A flirt. A very' 
					+ ' fair-haired woman.';
				break;
			case 'K': 
				message = 'A stubborn and influential man. A very fair-haired man.';
				break;
		}
	} else if (suite == 'hearts') {
		switch(num) {
			case 'A': 
				message = 'The home, love, friendship, joy the start of a romance. A love' 
					+ ' letter.';
				break;
			case '2': 
				message = 'Success and prosperity. An engagement or partnership.';
				break;
			case '3': 
				message = "You need to be cautious. Don't say something you'll regret.";
				break;
			case '4': 
				message = 'A change, a journey or a move of house/business. A late marriage.';
				break;
			case '5': 
				message = 'Jealous people around you. Take your time to make any decisions.';
				break;
			case '6': 
				message = 'Unexpected good luck. Someone helping you out.';
				break;
			case '7': 
				message = 'An unfaithful or unreliable person. Broken promises.';
				break;
			case '8': 
				message = 'Visits and visitors. Invitations out or attending a party.';
				break;
			case '9': 
				message = 'The wish card. Dreams come true.';
				break;
			case '10': 
				message = 'Good luck and happiness.';
				break;
			case 'J': 
				message = 'A close friend or a good-natured, fair-haired youth.';
				break;
			case 'Q': 
				message = 'A kindly fair-haired woman.';
				break;
			case 'K': 
				message = 'A good-natured, fair-haired man. Good advice.';
				break;
		}
	} else if (suite == 'spades') {
		switch(num) {
			case 'A': 
				message = 'Emotional conflict, obsession, death. Things coming to a head.';
				break;
			case '2': 
				message = 'Separation, gossip and deceit. Difficult changes.';
				break;
			case '3': 
				message = 'Unfaithfulness and partings. Be wary in partnerships.';
				break;
			case '4': 
				message = 'Illness. Business and money worries. Broken promises.';
				break;
			case '5': 
				message = 'Happy home but interference from other people. Reversals and' 
					+ 'opposition but eventual success.';
				break;
			case '6': 
				message = 'Small improvements.';
				break;
			case '7': 
				message = 'Loss of friendship or loss of a friend. An unexpected burden. ' 
					+ 'A warning against losses and sorrow.';
				break;
			case '8': 
				message = 'Trouble and disappointment. Plans go awry. Friends let you ' 
					+ 'down. Cancellations.';
				break;
			case '9': 
				message = 'Bad luck in all things. Depression and low energy. Destruction,'
					+ ' deaths. Extreme anxiety.';
				break;
			case '10': 
				message = 'Misfortune and worry. Imprisonment. Unwelcome news.';
				break;
			case 'J': 
				message = 'A well-meaning but immature and unreliable youth. A very' 
					+ 'dark-haired youth.';
				break;
			case 'Q': 
				message = 'A widow. An unscrupulous woman. A very dark-haired woman.';
				break;
			case 'K': 
				message = 'An ambitious and authoritative man. A very dark-haired man.';
				break;
		}
	} else {	// clubs
		switch(num) {
			case 'A': 
				message = 'Wealth, health, love and happiness. A letter concerning money.';
				break;
			case '2': 
				message = 'Gossip. Disappointments and opposition.';
				break;
			case '3': 
				message = 'Marriage to a wealthy partner. Money coming from the partner.';
				break;
			case '4': 
				message = 'Changes for the worse. Lies and betrayal.';
				break;
			case '5': 
				message = 'New friends and a successful marriage. Help from friends.';
				break;
			case '6': 
				message = 'Business success. Getting financial help.';
				break;
			case '7': 
				message = 'Prosperity and success. Be careful of trouble coming from a'
					+ ' person of the opposite sex.';
				break;
			case '8': 
				message = 'Trouble in relationships, business and personal. Jealousy and greed.';
				break;
			case '9': 
				message = "Achievements. A new lover or admirer. Don't be stubborn.";
				break;
			case '10': 
				message = 'Unexpected money coming in. Good luck. Travel abroad.';
				break;
			case 'J': 
				message = 'A reliable friend. A dark-haired youth.';
				break;
			case 'Q': 
				message = 'An attractive, self-confident woman. A dark-haired woman.';
				break;
			case 'K': 
				message = 'An honest, generous and affectionate man. A dark-haired man.';
				break;
		}	
	}
return message;
}