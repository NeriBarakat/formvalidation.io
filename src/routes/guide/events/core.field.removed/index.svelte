<svelte:head>
	<title>FormValidation • core.field.removed event</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">core.field.removed event</h1>
    <h2 class="f4 fw4 tc">Triggered after removing a field via the <a href="/guide/api/remove-field" class="blue dim link">removeField()</a> method</h2>

    <section class="mv5">
        <p class="lh-copy">The event object contains the following properties</p>
        <ul class="ma0 pl3 lh-copy">
            <li><code>elements</code>: HTMLElement[] — The field elements</li>
            <li><code>field</code>: String — The field name</li>
            <li><code>options</code>: Object — The field options</li>
        </ul>
    </section>

    <Examples examples={[
        'Adding dynamic field',
    ]} />

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/events/core.field.invalid">core.field.invalid event</PrevButton>
            <NextButton target="/guide/events/core.field.reset">core.field.reset event</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
</script>
