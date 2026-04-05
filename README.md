# 🌟 Baileys Akiko

<p align="center">
  <img src="https://raw.githubusercontent.com/AkikoClarisa/baileys-akiko/main/thumbnail.png" alt="Baileys Akiko Thumbnail" />
</p>

**Baileys Akiko** is a highly optimized, open-source library designed to help developers build automation solutions and integrations with WhatsApp efficiently. Using websocket technology without the need for a browser, this library supports a wide range of features such as message management, chat handling, group administration, interactive messages, and dynamic action buttons.

Actively developed and maintained by **AkikoClarisa**, this version of Baileys continuously receives updates to enhance stability, security, and performance. One of the main focuses is to provide a clean, bloatware-free environment with a much more stable pairing and authentication process.

This library is highly suitable for building business bots, chat automation systems, customer service solutions, and various other communication applications that require high stability and comprehensive features.

---

### ✨ Main Features and Advantages

- **Clean & Secure:** Fully optimized and stripped of unnecessary hidden scripts.
- **Enhanced Pairing:** Fixes previous pairing issues that often caused failures or disconnections.
- **Interactive UI:** Supports interactive messages, action buttons, and dynamic native flow menus.
- **Auto Reconnect:** Efficient automatic session management for reliable 24/7 operation.
- **Multi-Device Ready:** Compatible with the latest multi-device features from WhatsApp.
- **Lightweight:** Stable and easy to integrate into various systems and server environments.

---

## 🚀 Getting Started

Begin by installing the library via NPM:

```bash
npm install baileys-akiko
```

Use session storage and interactive messaging features to build complete, stable solutions tailored to your business or project needs.

---

## 📚 Documentation & Examples

### Label Group

Tag/Label Member Group

```javascript
await sock.setLabelGroup(jid, string)
```

---

### Check ID Channel

Get ID Channel From Url

```javascript
await sock.newsletterFromUrl(url)
```

**Result JSON:**

```json
{
  "name": "Name Channel",
  "id": "Channel ID",
  "state": "Status Channel",
  "subscribers": "Followers",
  "verification": "UNVERIFIED",
  "creation_time": 1728547155,
  "description": "Description Channel"
}
```

---

### Check Banned Number

Check the status of blocked/banned numbers easily:

```javascript
sock.checkWhatsApp(jid)
```

---

## 💬 SendMessage Documentation

### Status Mention Group & Private Message

Send Status Mention to Group/Private Chat:

```javascript
await sock.sendStatusMention(content, jid);
```

### Status Group Message V2

Send Group Status With Version 2:

```javascript
await sock.sendMessage(jid, {
     groupStatusMessage: {
          text: "Hello from Akiko!"
     }
});
```

### Album Message (Multiple Images)

Send multiple images in a single album message:

```javascript
await sock.sendMessage(jid, { 
    albumMessage: [
        { image: bufferImage, caption: "Foto pertama" },
        { image: { url: "URL IMAGE" }, caption: "Foto kedua" }
    ] 
}, { quoted: m });
```

### Event Message

Create and send WhatsApp event invitations:

```javascript
await sock.sendMessage(jid, { 
    eventMessage: { 
        isCanceled: false, 
        name: "Akiko Special Event", 
        description: "Join our community event!", 
        location: { 
            degreesLatitude: 0, 
            degreesLongitude: 0, 
            name: "Virtual Meetup" 
        }, 
        joinLink: "[https://github.com/AkikoClarisa](https://github.com/AkikoClarisa)", 
        startTime: "1763019000", 
        endTime: "1763026200", 
        extraGuestsAllowed: false 
    } 
}, { quoted: m });
```

### Poll Result Message

Display poll results with vote counts:

```javascript
await sock.sendMessage(jid, { 
    pollResultMessage: { 
        name: "Akiko Survey", 
        pollVotes: [
            { optionName: "Awesome", optionVoteCount: "112233" },
            { optionName: "Good", optionVoteCount: "1" }
        ] 
    } 
}, { quoted: m });
```

### Simple Interactive Message

Send basic interactive messages with copy button functionality:

```javascript
await sock.sendMessage(jid, {
    interactiveMessage: {
        header: "Baileys Akiko",
        title: "Welcome to Akiko",
        footer: "Powered by AkikoClarisa",
        buttons: [
            {
                name: "cta_copy",
                buttonParamsJson: JSON.stringify({
                    display_text: "Copy Source Code",
                    id: "123456789",              
                    copy_code: "AKIKO-2026"
                })
            }
        ]
    }
}, { quoted: m });
```

### Interactive Message with Native Flow

Send interactive messages with buttons, copy actions, and native flow features:

```javascript
await sock.sendMessage(jid, {    
    interactiveMessage: {      
        header: "Akiko Store",
        title: "Special Offers",      
        footer: "Github: AkikoClarisa",      
        image: { url: "[https://example.com/image.jpg](https://example.com/image.jpg)" },      
        nativeFlowMessage: {        
            messageParamsJson: JSON.stringify({          
                limited_time_offer: {            
                    text: "Limited Promo!",            
                    url: "[https://github.com/AkikoClarisa](https://github.com/AkikoClarisa)",            
                    copy_code: "AKIKO-PROMO",            
                    expiration_time: Date.now() * 999          
                },          
                bottom_sheet: {            
                    in_thread_buttons_limit: 2,            
                    divider_indices: [1, 2, 3, 4, 5, 999],            
                    list_title: "Menu",            
                    button_title: "Open Menu"          
                },          
                tap_target_configuration: {            
                    title: " X ",            
                    description: "Close",            
                    canonical_url: "[https://github.com/AkikoClarisa](https://github.com/AkikoClarisa)",            
                    domain: "akiko.example.com",            
                    button_index: 0          
                }        
            }),        
            buttons: [          
                {            
                    name: "single_select",            
                    buttonParamsJson: JSON.stringify({              
                        has_multiple_buttons: true            
                    })          
                },          
                {            
                    name: "call_permission_request",            
                    buttonParamsJson: JSON.stringify({              
                        has_multiple_buttons: true            
                    })          
                },          
                {            
                    name: "single_select",            
                    buttonParamsJson: JSON.stringify({              
                        title: "Select Option",              
                        sections: [                
                            {                  
                                title: "Main Menu",                  
                                highlight_label: "Hot",                  
                                rows: [                    
                                    {                      
                                        title: "Profile",                      
                                        description: "View Akiko Profile",                      
                                        id: "row_1"                    
                                    }                  
                                ]                
                            }              
                        ],              
                        has_multiple_buttons: true            
                    })          
                }       
            ]      
        }    
    }  
}, { quoted: m });
```

### Product Message

Send product catalog messages with buttons and merchant information:

```javascript
await sock.sendMessage(jid, {
    productMessage: {
        title: "Akiko Script Premium",
        description: "High-performance bot script",
        thumbnail: { url: "[https://example.com/image.jpg](https://example.com/image.jpg)" },
        productId: "PROD-AKIKO-01",
        retailerId: "RETAIL-01",
        url: "[https://github.com/AkikoClarisa](https://github.com/AkikoClarisa)",
        body: "Product Details",
        footer: "Special Price",
        priceAmount1000: 50000,
        currencyCode: "IDR",
        buttons: [
            {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                    display_text: "Buy Now",
                    url: "[https://github.com/AkikoClarisa](https://github.com/AkikoClarisa)"
                })
            }
        ]
    }
}, { quoted: m });
```

### Interactive Message with Document Buffer

Send interactive messages with document from buffer (file system):

```javascript
await sock.sendMessage(jid, {
    interactiveMessage: {
        header: "Akiko Docs",
        title: "Library Documentation",
        footer: "Github: AkikoClarisa",
        document: fs.readFileSync("./package.json"),
        mimetype: "application/pdf",
        fileName: "akiko_docs.pdf",
        jpegThumbnail: fs.readFileSync("./document.jpeg"),
        contextInfo: {
            mentionedJid: [jid],
            forwardingScore: 777,
            isForwarded: true
        },
        externalAdReply: {
            title: "Akiko Bot System",
            body: "The best WA library",
            mediaType: 3,
            thumbnailUrl: "[https://example.com/image.jpg](https://example.com/image.jpg)",
            mediaUrl: " X ",
            sourceUrl: "[https://github.com/AkikoClarisa](https://github.com/AkikoClarisa)",
            showAdAttribution: true,
            renderLargerThumbnail: false         
        },
        buttons: [
            {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                    display_text: "Visit GitHub",
                    url: "[https://github.com/AkikoClarisa](https://github.com/AkikoClarisa)",
                    merchant_url: "[https://github.com/AkikoClarisa](https://github.com/AkikoClarisa)"
                })
            }
        ]
    }
}, { quoted: m });
```

### Request Payment Message

Send payment request messages with custom background and sticker:

```javascript
let quotedType = m.quoted?.mtype || '';
let quotedContent = JSON.stringify({ [quotedType]: m.quoted }, null, 2);

await sock.sendMessage(jid, {
    requestPaymentMessage: {
        currency: "IDR",
        amount: 50000000,
        from: m.sender,
        sticker: JSON.parse(quotedContent),
        background: {
            id: "100",
            fileLength: "0",
            width: 1000,
            height: 1000,
            mimetype: "image/webp",
            placeholderArgb: 0xFF00FFFF,
            textArgb: 0xFFFFFFFF,     
            subtextArgb: 0xFFAA00FF   
        }
    }
}, { quoted: m });
```

---

## 💎 Why Choose Baileys Akiko?

Because this library offers high stability, comprehensive features, and an actively improved pairing process. It is the perfect choice for developers aiming to create professional and secure WhatsApp automation solutions. Support for the latest WhatsApp UI ensures compatibility with platform updates.

---

### Contact Developer

For questions, support, or collaboration, feel free to visit my GitHub:

- **GitHub**: [AkikoClarisa](https://github.com/AkikoClarisa)

### 🙌 Main Contributor

<table>
<tr>
<td align="center">
<a href="https://github.com/AkikoClarisa">
<img src="https://github.com/AkikoClarisa.png?size=100" width="80px;" style="border-radius:50%;" alt="AkikoClarisa"/>
<br />
<sub><b>AkikoClarisa</b></sub>
</a>
</td>
</tr>
</table>

**Thank you for choosing Baileys Akiko as your WhatsApp automation solution!**
