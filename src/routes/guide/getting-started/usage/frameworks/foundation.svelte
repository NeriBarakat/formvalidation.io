<FoundationLayout onLoaded={onLoaded}>
    <form id="demoForm">
        <div class="grid-container">
            <div class="grid-x grid-padding-x">
                <div class="small-3 cell">
                    <label class="text-right middle">Username</label>
                </div>
                <div class="small-6 cell">
                    <input type="text" name="username" />
                </div>
            </div>

            <div class="grid-x grid-padding-x">
                <div class="small-3 cell">
                    <label class="text-right middle">Password</label>
                </div>
                <div class="small-6 cell">
                    <input type="password" name="password" />
                </div>
            </div>

            <div class="grid-x grid-padding-x">
                <div class="small-9 small-offset-3 cell">
                    <button type="submit" class="button">Submit</button>
                </div>
            </div>
        </div>
    </form>
</FoundationLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/dist/es6/core/Core';
import DemoFrame from 'formvalidation/dist/es6/plugins/DemoFrame';
import Icon from 'formvalidation/dist/es6/plugins/Icon';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import Foundation from 'formvalidation/dist/es6/plugins/Foundation';
import SubmitButton from 'formvalidation/dist/es6/plugins/SubmitButton';

import sampleCode from './foundation.programmatic';
import FoundationLayout from '../../../../../components/demo/FoundationLayout.svelte';

let fv;

const onLoaded = () => {
    fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            username: {
                validators: {
                    notEmpty: {
                        message: 'The username is required'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: 'The username must be more than 6 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_]+$/,
                        message: 'The username can only consist of alphabetical, number and underscore'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'The password is required'
                    },
                    stringLength: {
                        min: 8,
                        message: 'The password must have at least 8 characters'
                    },
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            foundation: new Foundation(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/getting-started/usage/frameworks/foundation',
                sampleCode: sampleCode,
            }),
        },
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>
