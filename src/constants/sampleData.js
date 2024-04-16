export const blogs = {
    homeBlogs: [
        {
            title: `The Purrfect Companion: Finding Your Feline Soulmate`,
            description: `Welcome to the Catinder Blog, where we explore the wonderful world of cat companionship and feline friendships! Whether you're a seasoned cat lover or a curious newcomer, this blog is your guide to finding the purrfect feline companion to bring joy, warmth, and endless cuddles into your life.
    
            In our articles, we delve into topics such as understanding different cat breeds, decoding feline behavior, creating a cat-friendly home environment, and tips for bonding with your furry friend. Join us on a journey through heartwarming stories, expert advice, and adorable cat photos that will melt your heart.
    
            Whether you're looking to adopt a new kitten, navigate the challenges of multi-cat households, or simply enrich your bond with your beloved pet, the Catinder Blog is here to inspire, educate, and celebrate the magical connection between humans and cats.
    
            So grab a cozy blanket, snuggle up with your kitty, and let's embark on this delightful adventure together!`
        },
        {
            title: `Whiskers and Whimsy: A Day in the Life of a Cat Lover`,
            description: `Hey there, fellow feline aficionados! Today, I thought I'd share a little glimpse into my life as a proud cat parent. 🐾
    
            Morning begins with the soft purring of my furry alarm clocks, as my adorable fluffballs gently nudge me awake with their whiskery kisses. After a sleepy-eyed stretch, it's time to prepare breakfast for my finicky feline friends. From gourmet cat cuisine to the occasional treat, mealtime is always a joyous occasion in our household.
            
            Once our bellies are full and our spirits are high, it's playtime! Whether it's chasing laser pointers, pouncing on feather wands, or simply lounging in a sunbeam, every moment spent with my cats is a precious gift. Their playful antics never fail to bring a smile to my face and warmth to my heart.
            
            As the day unfolds, we embark on our own little adventures together. From exploring new hiding spots to cuddling up for a cozy nap, each moment is filled with love, laughter, and the undeniable magic of cat companionship.
            
            And as the sun sets on another purrfect day, I find myself filled with gratitude for the joy that my cats bring into my life. They may be small in size, but their love knows no bounds.
            
            So here's to whiskers, purrs, and the endless wonders of the feline world. May your days be filled with as much love and happiness as mine are with my beloved fur babies. Until next time, keep on purring!`
        }
    ]
}

export const cats = {
    homeListCats: [
        {
            id: 1,
            name: 'Dog',
            gender: 'Male',
            star: 4.3,
            description: 'This cat named Dog is actually a male.',
            image: require('../../assets/image/cat-samples/cat6.jpg')
        },
        {
            id: 2,
            name: 'Cat',
            gender: 'Female',
            star: 4.5,
            description: 'This cat is named Cat.',
            image: require('../../assets/image/cat-samples/cat5.jpg')
        },
        {
            id: 3,
            name: 'Bird',
            gender: 'Unknown',
            star: 3.8,
            description: 'This cat is named Bird.',
            image: require('../../assets/image/cat-samples/cat7.jpg')
        },
        {
            id: 4,
            name: 'Fish',
            gender: 'Male',
            star: 4.0,
            description: 'This cat is named Fish.',
            image: require('../../assets/image/cat-samples/cat2.jpg')
        },
        {
            id: 5,
            name: 'Rabbit',
            gender: 'Female',
            star: 4.2,
            description: 'This cat is named Rabbit.',
            image: require('../../assets/image/cat-samples/cat1.jpg')
        },
        {
            id: 6,
            name: 'Chicken',
            gender: 'Gay',
            star: 1.8,
            description: 'This cat is named Gay lord.',
            image: require('../../assets/image/cat-samples/cat3.jpg')
        },
    ]
}

export const notifications = [
    {
        id: 1,
        type: "newMatch",
        title: "Congratulations! Doggy has matched with Oggay. Start chatting now!",
        image: '',
        relativeTimestamp: '1m',
        isRead: false,
        onTap: () => { }
    },
    {
        id: 2,
        type: "messageReceived",
        sender: 'Jack',
        title: "Meow! Whiskers sent you a message: 'Hi, you wanna breed my bird?'",
        btnTitle: 'Reply',
        onTapBtn: () => { },
        isRead: true,
        relativeTimestamp: '8h',
        image: '',
        onTap: () => { }
    },
    {
        id: 3,
        image: '',
        type: "reminder",
        title: "Don't forget to update Oggay' profile! Upload some cute photos to attract potential matches.",
        btnTitle: 'Got it',
        relativeTimestamp: '10w',
        isRead: false,
        onTapBtn: () => { },
        onTap: () => { }
    },
    {
        id: 4,
        image: '',
        type: "profileVisit",
        title: "Fluffy's owner visited your cat's profile. Maybe they're interested in connecting with Oggay!",
        isRead: true,
        onTap: () => { },
        relativeTimestamp: '2d'

    },
    {
        id: 5,
        image: '',
        type: "newFeature",
        title: "New Feature Alert!",
        content: `We're pleased to introduce the latest enhancement in out template experience.`,
        btnTitle: 'Try now',
        onTapBtn: () => { },
        onTap: () => { },
        isRead: false,
        relativeTimestamp: '2m'
    },
    {
        id: 6,
        image: '',
        type: "feedbackRequest",
        title: `Feedback system announcements`,
        content: "Help us improve Catinder! Share your feedback in a quick survey and receive a special gift for your furry friend.",
        onTap: () => { },
        isRead: true,
        relativeTimestamp: '8m'
    }
]


export const listChats = [
    {
        id: 1,
        sender: 'Tommy',
        totalUnread: 3,
        message: `I'll beat your mitch`,
        relativeTimestamp: '8m',
        image: ''
    },
    {
        id: 2,
        sender: 'Lily',
        totalUnread: 1,
        message: `Hey, how's it going?`,
        relativeTimestamp: '15m',
        image: ''
    },
    {
        id: 3,
        sender: 'Max',
        totalUnread: 0,
        message: `Let's meet up tomorrow.`,
        relativeTimestamp: '22m',
        image: ''
    },
    {
        id: 4,
        sender: 'Sophie',
        totalUnread: 2,
        message: `Did you see the latest episode?`,
        relativeTimestamp: '30m',
        image: ''
    },
    {
        id: 5,
        sender: 'Oliver',
        totalUnread: 0,
        message: `Check out this meme!`,
        relativeTimestamp: '40m',
        image: ''
    },
    {
        id: 6,
        sender: 'Emma',
        totalUnread: 0,
        message: `How was your day?`,
        relativeTimestamp: '55m',
        image: ''
    },
    {
        id: 7,
        sender: 'Jack',
        totalUnread: 5,
        message: `We need to talk.`,
        relativeTimestamp: '1h',
        image: ''
    }
]


export const chat = [
    {
        id: 1,
        senderId: 1, receiverId: 2, receiver: 'Tommy',
        sender: 'Thomas',
        timestamp: 1,
        message: 'Hello world',
        isRead: true,
        relativeTimestamp: '7m'
    },
    {
        id: 2,
        senderId: 1, receiverId: 2, receiver: 'Tommy',
        sender: 'Thomas',
        timestamp: 2,
        message: 'Cock',
        isRead: true,
        relativeTimestamp: '7m'
    },
    {
        id: 3,
        senderId: 2, receiverId: 1, receiver: 'Thomas',
        sender: 'Tommy',
        timestamp: 1,
        message: 'Yay',
        isRead: true,
        relativeTimestamp: '6m'
    },
    {
        id: 4,
        senderId: 1, receiverId: 2, receiver: 'Tommy',
        sender: 'Thomas',
        timestamp: 2,
        message: 'Dog',
        isRead: true,
        relativeTimestamp: '5m'
    },
    {
        id: 5,
        senderId: 2, receiverId: 1, receiver: 'Thomas',
        sender: 'Tommy',
        timestamp: 1,
        message: 'Hehe',
        isRead: true,
        relativeTimestamp: '5m'
    },
    {
        id: 6,
        senderId: 1, receiverId: 2, receiver: 'Tommy',
        sender: 'Thomas',
        timestamp: 3,
        message: 'Goodbye',
        isRead: true,
        relativeTimestamp: '5m'
    },
    {
        id: 7,
        senderId: 2, receiverId: 1, receiver: 'Thomas',
        sender: 'Tommy',
        timestamp: 2,
        message: 'See you later!',
        isRead: true,
        relativeTimestamp: '4m'
    },
    {
        id: 8,
        senderId: 1, receiverId: 2, receiver: 'Tommy',
        sender: 'Thomas',
        timestamp: 4,
        message: 'How are you?',
        isRead: true,
        relativeTimestamp: '4m'
    },
    {
        id: 9,
        senderId: 1, receiverId: 2, receiver: 'Tommy',
        sender: 'Thomas',
        timestamp: 5,
        message: 'What are you up to?',
        isRead: true,
        relativeTimestamp: '4m'
    },
    {
        id: 10,
        senderId: 2, receiverId: 1, receiver: 'Thomas',
        sender: 'Tommy',
        timestamp: 3,
        message: 'Just chilling',
        isRead: true,
        relativeTimestamp: '4m'
    },
    {
        id: 11,
        senderId: 2, receiverId: 1, receiver: 'Thomas',
        sender: 'Tommy',
        timestamp: 4,
        message: 'Want to grab some food?',
        isRead: true,
        relativeTimestamp: '4m'
    },
    {
        id: 12,
        senderId: 1, receiverId: 2, receiver: 'Tommy',
        sender: 'Thomas',
        timestamp: 6,
        message: 'Sure, where do you want to go?',
        isRead: true,
        relativeTimestamp: '3m'
    },
    {
        id: 13,
        senderId: 1, receiverId: 2, receiver: 'Tommy',
        sender: 'Thomas',
        timestamp: 7,
        message: 'How about that new place downtown?',
        isRead: true,
        relativeTimestamp: '3m'
    },
    {
        id: 14,
        senderId: 2, receiverId: 1, receiver: 'Thomas',
        sender: 'Tommy',
        timestamp: 5,
        message: 'Sounds good to me!',
        isRead: true,
        relativeTimestamp: '3m'
    },
    {
        id: 15,
        senderId: 2, receiverId: 1, receiver: 'Thomas',
        sender: 'Tommy',
        timestamp: 6,
        message: 'See you there at 7?',
        isRead: true,
        relativeTimestamp: '3m'
    },
    {
        id: 16,
        senderId: 1, receiverId: 2, receiver: 'Tommy',
        sender: 'Thomas',
        timestamp: 8,
        message: 'Perfect, see you then!',
        isRead: true,
        relativeTimestamp: '3m'
    },
    {
        id: 17,
        senderId: 1, receiverId: 2, receiver: 'Tommy',
        sender: 'Thomas',
        timestamp: 9,
        message: `I'm looking forward to it!`,
        isRead: true,
        relativeTimestamp: '3m'
    },
    {
        id: 18,
        senderId: 2, receiverId: 1, receiver: 'Thomas',
        sender: 'Tommy',
        timestamp: 7,
        message: `Me too, it's been a while since we hung out!`,
        isRead: true,
        relativeTimestamp: '2m'
    },
    {
        id: 19,
        senderId: 2, receiverId: 1, receiver: 'Thomas',
        sender: 'Tommy',
        timestamp: 8,
        message: 'Definitely, we should do this more often!',
        isRead: true,
        relativeTimestamp: '2m'
    },
    {
        id: 20,
        senderId: 1, receiverId: 2, receiver: 'Tommy',
        sender: 'Thomas',
        timestamp: 10,
        message: 'Absolutely!',
        isRead: true,
        relativeTimestamp: '2m'
    },
    {
        id: 21,
        senderId: 1, receiverId: 2, receiver: 'Tommy',
        sender: 'Thomas',
        timestamp: 11,
        message: `I'm glad we're making plans like this.`,
        isRead: true,
        relativeTimestamp: '2m'
    },
    {
        id: 22,
        senderId: 2, receiverId: 1, receiver: 'Thomas',
        sender: 'Tommy',
        timestamp: 9,
        message: `Me too, it's important to keep in touch!`,
        isRead: true,
        relativeTimestamp: '2m'
    },
    {
        id: 23,
        senderId: 2, receiverId: 1, receiver: 'Thomas',
        sender: 'Tommy',
        timestamp: 10,
        message: 'Absolutely, friendship is valuable.',
        isRead: true,
        relativeTimestamp: '2m'
    },
    {
        id: 24,
        senderId: 1, receiverId: 2, receiver: 'Tommy',
        sender: 'Thomas',
        timestamp: 12,
        message: `Couldn't agree more!`,
        isRead: true,
        relativeTimestamp: '1m'
    },
    {
        id: 25,
        senderId: 1, receiverId: 2, receiver: 'Tommy',
        sender: 'Thomas',
        timestamp: 13,
        message: `Anyway, how's work been going?`,
        isRead: true,
        relativeTimestamp: '1m'
    },
    {
        id: 26,
        senderId: 2, receiverId: 1, receiver: 'Thomas',
        sender: 'Tommy',
        timestamp: 11,
        message: `It's been busy, but good overall. How about you?`,
        isRead: true,
        relativeTimestamp: '1m'
    },
    {
        id: 27,
        senderId: 2, receiverId: 1, receiver: 'Thomas',
        sender: 'Tommy',
        timestamp: 12,
        message: 'Same here, lots to do but making progress.',
        isRead: true,
        relativeTimestamp: '1m'
    }
]