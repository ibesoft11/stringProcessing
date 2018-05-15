/*String processing snippet
*Author : Ibe Ogele
*For : NodeJS_Class*/

/**
 * This Class contains functions to print out lists of names, emails and phone numbers in a string
 * @param {*text String to process}
 */
function processString(text){
     /**
     *Displays list of names in the text*/
    this.printNames = function(){
        var outputNames=[];
        for (var s of text.split('\n')){
            var endPoint = s.indexOf("<")-1;
            outputNames.push(s.substring(0,endPoint));
        }
        return console.log("Names =", outputNames, "\n");
    }
    /**
     *Displays list of emails in the text*/
    this.printEmails = function(){
        var outputEmails=[];
        for (var s of text.split('\n')){
            var startPoint = s.indexOf("<")
            var endPoint = s.indexOf(">");
            outputEmails.push(s.substring(startPoint,endPoint));
        }
        return console.log("Email Addresses =", outputEmails , "\n");
    }
     /**
     *Displays list of phone numbers in the text*/
    this.printNumbers = function(){
        var outputNumbers=[];
        for (var s of text.split('\n')){
            var startPoint = s.indexOf("+");
            var endPoint = s.length;
            outputNumbers.push(s.substring(startPoint,endPoint));
        }
        return console.log("Phone Numbers =", outputNumbers, "\n");
    }
}

var text = `Valentine Oragbakosi <v.oragbakosi@genesystechhub.com> +234-7032434429
Chinonso Williams Junior <c.williams@genesystechhub.com> +234-9034464230
Ndife Uchenna <n.uchenna@genesystechhub.com> +234-8052464529
Ehiogu Chika Josephine <c.josephine@genesystechhub.com> +234-7022454620
Chidera Jennifer <c.jennifer@genesystechhub.com> +234-8032434425
Nwosu Ifeoma Lucia <l.ifeoma@genesystechhub.com> +234-9032434424
Ibe Agwu <i.ogele@genesystechhub.com> +234-7032434427`;
var processStr = new processString(text);
processStr.printNames();
processStr.printEmails();
processStr.printNumbers();