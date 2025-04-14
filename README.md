# 🤖 Challenge: Make Your Robot Listen and Move!

## 🎯 Your Mission:
Build a program that lets your Cutebot **receive messages** from another Micro:bit and **move based on what it hears**. You're giving your robot ears and a brain!

---

## 🧠 What You'll Need to Think About:
- How can two Micro:bits **talk** to each other?
- How will your robot **know what to do** when it hears something?
- How do you tell a robot to **go forward, backward, turn, or stop**?

---

## 🧰 Tools:
- Micro:bit + Cutebot robot
- The **MakeCode editor** ([makecode.microbit.org](https://makecode.microbit.org))
- Cutebot extension
- Your creativity!

---

## 🧩 Some Clues to Get You Started:

### 🧩 1. Talking Without Wires
Think about how to let two Micro:bits talk over the air.  
There's a **pink block category** that helps with that.  
You'll need to make sure **both Micro:bits are on the same channel**!

---

### 🧩 2. Listening for Commands
One Micro:bit will **send messages** like `"forward"` or `"stop"`.  
The other one (on the robot) should **wait for messages** and **react**.

Can you find a block that starts with:

```
on radio received receivedString
```

This will help the robot know when it's being told something.

---

### 🧩 3. Telling the Robot What to Do
What blocks control the **Cutebot motors**?  
(Hint: You'll need to **add something extra** using the ⚙️ gear icon in MakeCode.)

Once you've got the robot listening, match the message it hears with the right movement. For example:
- Move forward when you hear `"forward"`
- Stop when you hear `"stop"`

Can you think of a smart way to check which message was received?

---

### 🧩 4. Time to Test!
Once you've built your "listener" code:
- Try it out with a second Micro:bit sending commands
- Use buttons or gestures on the sender Micro:bit to **trigger messages**
- What happens when you send `"left"` or `"right"`?

---

## 🧠 Extra Challenges (if you're feeling brave!):
- Add **lights or sounds** when certain messages are received
- Make your robot do a little dance when you send a `"party"` command
- Add a way to **change speed** using different messages!

---

## 🎉 You Did It!
Once your robot can follow instructions from the air, you've built your first **wireless robot control system**. That's pretty awesome!

<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
