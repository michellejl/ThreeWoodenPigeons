{% extends "../layouts/default.swig" %}

{% block intro %}
	<div class="container">
		<h1>Flickr Gallery</h1>
	</div>
{% endblock %}

{% block content %}
	<div class="container">
		{% if galleries.length %}
			{% for gallery in galleries %}
				<h2>{{ gallery.name }}
					{% if gallery.publishedDate %}
						<span class="pull-right text-muted">{{ gallery._.publishedDate.format("Do MMM YYYY") }}</span>
					{% endif %}
				</h2>

				<div class="row gallery-images">
					{% if gallery.heroImage.exists %}
						<div class="col-sm-4 col-md-4 gallery-image">
							<img src="{{ gallery._.heroImage.limit(680,680) }}" class="img-rounded">
						</div>
						<div class="col-sm-8 col-md-8">
							<div class="row">
								{% for image in gallery.images %}
									<div class="col-xs-4 col-sm-4 col-md-3 gallery-image">
										<img src="{{ image.limit(300,300) }}" class="img-rounded">
									</div>
								{% endfor %}
							</div>
						</div>
					{% else %}
						{% for image in gallery.images %}
							<div class="col-xs-6 col-sm-4 col-md-3 gallery-image">
								<img src="{{ image.limit(300,300) }}" class="img-rounded">
							</div>
						{% endfor %}
					{% endif %}
				</div>
			{% endfor %}
		{% else %}
			<h3 class="text-muted">There are no image galleries yet.</h3>
		{% endif %}
	</div>
{% endblock %}
