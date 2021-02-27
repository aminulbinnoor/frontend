<template>
	<div class="fade-in">
		<div class="row">
			<div class="col-sm-6 col-lg-3">
				<div class="card text-white bg-gradient-primary">
					<div class="card-body card-body pb-0 d-flex justify-content-between align-items-start">
						<div>
							<div class="text-value-lg">9.823</div>
							<div>Members online</div>
						</div>
						<div class="btn-group">
							<button class="btn btn-transparent dropdown-toggle p-0" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								a
							</button>
							<div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="#">Action</a><a class="dropdown-item" href="#">Another action</a><a class="dropdown-item" href="#">Something else here</a>
							</div>
						</div>
					</div>
					<div class="c-chart-wrapper mt-3 mx-3" style="height:70px;">
						<div class="chartjs-size-monitor">
							<div class="chartjs-size-monitor-expand">
								<div class=""></div>
							</div>
							<div class="chartjs-size-monitor-shrink">
								<div class=""></div>
							</div>
						</div>
						<canvas class="chart chartjs-render-monitor" id="card-chart1" height="70" style="display: block;" width="340"></canvas>
						<div id="card-chart1-tooltip" class="c-chartjs-tooltip top" style="opacity: 0; left: 230.76px; top: 123.662px;">
							<div class="c-tooltip-header">
								<div class="c-tooltip-header-item">June</div>
							</div>
							<div class="c-tooltip-body">
								<div class="c-tooltip-body-item"><span class="c-tooltip-body-item-color" style="background-color: rgb(32, 168, 216);"></span><span class="c-tooltip-body-item-label">My First dataset</span><span class="c-tooltip-body-item-value">55</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-sm-6 col-lg-3">
				<div class="card text-white bg-gradient-info">
					<div class="card-body card-body pb-0 d-flex justify-content-between align-items-start">
						<div>
							<div class="text-value-lg">9.823</div>
							<div>Members online</div>
						</div>
						<div class="btn-group">
							<button class="btn btn-transparent dropdown-toggle p-0" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<svg class="c-icon">
									<use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-settings"></use>
								</svg>
							</button>
							<div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="#">Action</a><a class="dropdown-item" href="#">Another action</a><a class="dropdown-item" href="#">Something else here</a>
							</div>
						</div>
					</div>
					<div class="c-chart-wrapper mt-3 mx-3" style="height:70px;">
						<div class="chartjs-size-monitor">
							<div class="chartjs-size-monitor-expand">
								<div class=""></div>
							</div>
							<div class="chartjs-size-monitor-shrink">
								<div class=""></div>
							</div>
						</div>
						<canvas class="chart chartjs-render-monitor" id="card-chart2" height="70" width="340" style="display: block;"></canvas>
						<div id="card-chart2-tooltip" class="c-chartjs-tooltip bottom" style="opacity: 0; left: 84.9053px; top: 138.054px;">
							<div class="c-tooltip-header">
								<div class="c-tooltip-header-item">January</div>
							</div>
							<div class="c-tooltip-body">
								<div class="c-tooltip-body-item"><span class="c-tooltip-body-item-color" style="background-color: rgb(99, 194, 222);"></span><span class="c-tooltip-body-item-label">My First dataset</span><span class="c-tooltip-body-item-value">1</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-sm-6 col-lg-3">
				<div class="card text-white bg-gradient-warning">
					<div class="card-body card-body pb-0 d-flex justify-content-between align-items-start">
						<div>
							<div class="text-value-lg">9.823</div>
							<div>Members online</div>
						</div>
						<div class="btn-group">
							<button class="btn btn-transparent dropdown-toggle p-0" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<svg class="c-icon">
									<use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-settings"></use>
								</svg>
							</button>
							<div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="#">Action</a><a class="dropdown-item" href="#">Another action</a><a class="dropdown-item" href="#">Something else here</a>
							</div>
						</div>
					</div>
					<div class="c-chart-wrapper mt-3" style="height:70px;">
						<div class="chartjs-size-monitor">
							<div class="chartjs-size-monitor-expand">
								<div class=""></div>
							</div>
							<div class="chartjs-size-monitor-shrink">
								<div class=""></div>
							</div>
						</div>
						<canvas class="chart chartjs-render-monitor" id="card-chart3" height="70" width="372" style="display: block;"></canvas>
					</div>
				</div>
			</div>
			<div class="col-sm-6 col-lg-3">
				<div class="card text-white bg-gradient-danger">
					<div class="card-body card-body pb-0 d-flex justify-content-between align-items-start">
						<div>
							<div class="text-value-lg">9.823</div>
							<div>Members online</div>
						</div>
						<div class="btn-group">
							<button class="btn btn-transparent dropdown-toggle p-0" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<svg class="c-icon">
									<use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-settings"></use>
								</svg>
							</button>
							<div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="#">Action</a><a class="dropdown-item" href="#">Another action</a><a class="dropdown-item" href="#">Something else here</a>
							</div>
						</div>
					</div>
					<div class="c-chart-wrapper mt-3 mx-3" style="height:70px;">
						<div class="chartjs-size-monitor">
							<div class="chartjs-size-monitor-expand">
								<div class=""></div>
							</div>
							<div class="chartjs-size-monitor-shrink">
								<div class=""></div>
							</div>
						</div>
						<canvas class="chart chartjs-render-monitor" id="card-chart4" height="70" width="340" style="display: block;"></canvas>
					</div>
				</div>
			</div>
		</div>
		
	</div>
</template>
<script>
	import {http1} from '@/api/axios'

	export default {
	  data () {
	    return {
	      breadcrumb: [
	          {name: 'Home',link: ''},

	      ],
	    }
	  },

	  created () {
	      this.$store.commit('setBreadcrumbs',this.breadcrumb)
	  },
	}
</script>
<style lang="scss" scoped>
</style>
