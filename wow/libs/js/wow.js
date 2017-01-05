function getGuildMembers(realmName,guildName) {
    // console.log(realmName,guildName)
    if (realmName && guildName) {
        $.getJSON('https://us.api.battle.net/wow/guild/'+realmName+'/'+guildName+'?fields=members&locale=en_US&apikey='+apiKey,
            {},
            function(data) {
                var members = data.members,
                    membersHtml = '';
                // console.log(members.length);

                $('.guild-member-count').html(members.length);
                if (members.length>=0) {
                    members.forEach(function(member) {
                        var character = member.character;
                        membersHtml+='<tr class="character-info" data-character="'+character.name+'">';
                        membersHtml+='<td>'+character.name+'</td>';
                        membersHtml+='<td>'+character.level+'</td>';
                        membersHtml+='<td>'+ character.achievementPoints +'</td>';

                        membersHtml+='<td>'+getRace(character.race)+'</td>';
                        membersHtml+='<td>'+getClass(character.class)+'</td>';
                        if(character.spec) {
                            membersHtml+='<td>'+ character.spec.name +'</td>';
                            membersHtml+='<td>'+ character.spec.role +'</td>';
                        } else {
                            membersHtml+='<td>None</td>';
                            membersHtml+='<td>None</td>';
                        }
                        membersHtml+='</tr>';
                    });
                } else {
                    membersHtml+='<tr>';
                    membersHtml+='<td colspan="7">There is no Guild found with that name in this Realm.</td>';
                    membersHtml+='</tr>';
                }

                $('#members-table tbody').html(membersHtml);
                $('#realmNameInput').val(realmName);

                var membersTable = document.getElementById('members-table')
                sorttable.makeSortable(membersTable);
            }
        );
    }
}

function getRealms(apiKey) {
    $.getJSON('https://us.api.battle.net/wow/realm/status?locale=en_US&apikey='+apiKey,
        {},
        function(data) {
            // console.log(realms);
            var realms = data.realms;
            var realmNameHtml = '';
            // console.log(realms);
            if (realms.length>=0) {
                realms.forEach(function(realm) {
                    realmNameHtml+= '<option value="'+realm.name+'">'+realm.name+'</option>';
                });
            }
            // console.log(realmNameHtml);
            $('#realmNameInput').html(realmNameHtml);
        });
}

function getRace(characterRace) {
    switch(characterRace) {
        case 1: return 'Human';
        case 2: return 'Orc';
        case 3: return 'Dwarf';
        case 4: return 'Night Elf';
        case 5: return 'Undead';
        case 6: return 'Tauren';
        case 7: return 'Gnome';
        case 8: return 'Troll';
        case 9: return 'Goblin';
        case 10: return 'Blood Elf';
        case 11: return 'Draenei';
        case 22: return 'Worgen';
        case 24: return 'Pandaren';
        case 25: return 'Pandaren';
        case 26: return 'Pandaren';
    }
}

function getClass(characterClass) {
    switch(characterClass) {    
        case 1: return 'Warrior';
        case 2: return 'Paladin';
        case 3: return 'Hunter';
        case 4: return 'Rogue';
        case 5: return 'Priest';
        case 6: return 'Death Knight';
        case 7: return 'Shaman';
        case 8: return 'Mage';
        case 9: return 'Warlock';
        case 9: return 'Monk';
        case 11: return 'Druid';
        case 12: return 'Demon Hunter';
    }
}

function getQuest(questId) {
    var quests = localStorage.getItem('quests');
    if (quests) {
        return JSON.parse(quests);
    } else {
        // Return quest if quest id exists, otherwise save it and return quests
    }
}
