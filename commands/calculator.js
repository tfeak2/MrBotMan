module.exports = {
    name: "calculator",
    description: "calculator in discord",
    execute(message, args, disbut){
        one = new disbut.MessageButton()
        .setStyle("gray")
        .setLabel("1")
        .setID("1");
        two = new disbut.MessageButton()
        .setStyle("gray")
        .setLabel("2")
        .setID("2");
        three = new disbut.MessageButton()
        .setStyle("gray")
        .setLabel("3")
        .setID("3");

        //collum two

        four = new disbut.MessageButton()
        .setStyle("gray")
        .setLabel("4")
        .setID("4");
        five = new disbut.MessageButton()
        .setStyle("gray")
        .setLabel("5")
        .setID("5");
        six = new disbut.MessageButton()
        .setStyle("gray")
        .setLabel("6")
        .setID("6");

        //collum three

        seven = new disbut.MessageButton()
        .setStyle("gray")
        .setLabel("7")
        .setID("7");
        eight = new disbut.MessageButton()
        .setStyle("gray")
        .setLabel("8")
        .setID("8");
        nine = new disbut.MessageButton()
        .setStyle("gray")
        .setLabel("9")
        .setID("9");

        //collum four

        zero = new disbut.MessageButton()
        .setStyle("gray")
        .setLabel("0")
        .setID("0");

        plus = new disbut.MessageButton()
        .setStyle("green")
        .setLabel("+")
        .setID("+");
        minus = new disbut.MessageButton()
        .setStyle("red")
        .setLabel("-")
        .setID("-");
        equals = new disbut.MessageButton()
        .setStyle("blurple")
        .setLabel("=")
        .setID("=");
        clear = new disbut.MessageButton()
        .setStyle("red")
        .setLabel("X")
        .setID("X");

        message.channel.send("0", {
            buttons: [one, two, plus, equals, clear]
        });
    }
}