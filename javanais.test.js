describe('javanais', function () {

    var dictionnaire = [];
	var i = 1;

    beforeEach(function () {
        console.log('demarrage test n°'+i);
		i++;
        dictionnaire = readJSON('dictionnaire.json');
        console.log(dictionnaire);
    });

    it('traduction de francais a javanais', function () {
        expect(javanais.frTojav('bonjour')).toEqual('bavonjavour');
    });

    it('traduction de javanais a francais', function () {
        expect(javanais.javToFr('bavonjavour')).toEqual('bonjour');
    });

    it('traduction de francais a javanais avec accent', function () {
        expect(javanais.frTojav('héhé')).toEqual('havéhavé');
    });

    it('traduction de javanais a francais avec accent', function () {
        expect(javanais.javToFr('havéhavé')).toEqual('héhé');
    });

    it('traduire un dictionnaire', function () {
        dictionnaire.forEach(function (item) {
            expect(javanais.frTojav(item.fr)).toEqual(item.jav);
            expect(javanais.javToFr(item.jav)).toEqual(item.fr);
        });
    });


});