import { Chats } from '../../../lib/collections';
import { Controller } from 'angular-ecmascript/module-helpers';

export default class ChatsCtrl extends Controller {
    constructor() {
        super(...arguments);

        this.helpers({
            data() {
                return Chats.find();
            }
        });
    }

    showNewChatModal() {
        this.NewChat.showModal();
    }

    remove(chat) {
        // Chats.remove(chat._id);
        this.callMethod('removeChat', chat._id);
    }
}

ChatsCtrl.$name = 'ChatsCtrl';
ChatsCtrl.$inject = ['NewChat'];