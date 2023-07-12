<script lang="ts">
import StockForm from './stockForm.svelte';

const options = {
	title: {
		text: "Basic Column Chart in React"
	},
	data: [{				
		type: "column",
		dataPoints: [
			{ label: "Apple",  y: 10  },
			{ label: "Orange", y: 15  },
			{ label: "Banana", y: 25  },
			{ label: "Mango",  y: 30  },
			{ label: "Grape",  y: 28  }
		]
	}]
}
</script>

<main>
	<StockForm id="test" />
	<canvas width="32" height="32"></canvas>
	<CanvasJSStockChart options={options} />
</main>

<style>
main { 
  display: flex;
  flex-flow: row wrap;
}
main > * {
  flex: 0 1 50%;
}
</style>